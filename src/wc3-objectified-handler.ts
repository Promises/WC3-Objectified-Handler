import { ObjectSpecType, UnitField, UnitsObjectified, WCUnit } from './lib/data/Unit';
import {  writeFileSync } from 'fs';
import DefaultUnits from './lib/data/DefaultUnits.json';
import UnitMetaData from './lib/data/UnitMetaData.json';

export class WC3ObjectHandler {
    private BaseUnitsLoaded: boolean = false;
    private DefaultUnits: Map<string, WCUnit> = new Map<string, WCUnit>();
    private FieldData: Map<string, UnitField> = new Map<string, UnitField>();
    private SlkFieldBindings: Map<string, string> = new Map<string, string>();
    private FIELD_ID_INDEXED: string = 'INDX';

    constructor() {
        this.LoadUnitFieldConstants();
        this.LoadDefaultUnits();
    }
    /**
     * GetBaseUnit
     */
    public GetBaseUnit(baseUnit: string): WCUnit | undefined {
        if (!this.BaseUnitsLoaded) {
            console.error('baseUnits arent loaded yet');
            return;
        }
        return this.DefaultUnits.get(baseUnit);
    }

    /**
     * GetUnitFieldData
     */
    public GetUnitFieldData(fieldName: string): UnitField | undefined {
        return this.FieldData.get(fieldName);
    }
    /**
     * ParseJsonObject
     */
    public ParseJsonObject(data: any): Map<string, WCUnit> {
        const UnitMap: Map<string, WCUnit> = new Map<string, WCUnit>();
        if (data.specs) {

            if (data.specs.type !== undefined) {

                if (data.specs.type === ObjectSpecType.UNIT) {
                    const objdata: UnitsObjectified = data as UnitsObjectified;
                    for (const unit of objdata.objects) {
                        if (!unit.ID || !unit.baseUnit) {
                            console.error('COULDNT FIND UNIT ID or base id IN ', unit);
                            continue;
                        }
                        const u: WCUnit = new WCUnit(unit.ID, {isCustom: true, baseUnit: unit.baseUnit});
                        const baseUnit: WCUnit | undefined = this.GetBaseUnit(unit.baseUnit);
                        if (!baseUnit) {
                            console.error('couldnt find base unit', unit.baseUnit);
                            continue;
                        }
                        u.setDefaults(baseUnit, unit.baseUnit);
                        u.setValues(unit);
                        UnitMap.set(u.ID, u);
                    }
                    return UnitMap;
                }
            }
        }

        for (const unit in data.custom) {
            if (data.custom.hasOwnProperty(unit)) {
                const relation: string[] = unit.split(':');
                const u: WCUnit = new WCUnit(relation[0], {isCustom: true, baseUnit: relation[1]});
                if (!u.baseUnit) {
                    console.error('COULDNT FIND UNIT ID or base id IN ', u);
                    continue;
                }
                const baseUnit: WCUnit | undefined = this.GetBaseUnit(u.baseUnit);
                if (!baseUnit) {
                    console.error('couldnt find base unit', u.baseUnit);
                    continue;
                }
                u.setDefaults(baseUnit, u.baseUnit);
                for (const attr of data.custom[unit]) {
                    // @ts-ignore
                    u[attr.id] = attr.value;
                }
                UnitMap.set(relation[0], u);
            }
        }
        return UnitMap;
    }

    public SlkFieldToUnitField(key: string): string | undefined {
        return this.SlkFieldBindings.get(key);
    }


    public LoadDefaultUnits(): void {
        const unitData: any = DefaultUnits;
        // console.log('loaded field data');
        for (const key in unitData) {
            if (unitData.hasOwnProperty(key)) {
                const u: WCUnit = new WCUnit(key, {isCustom: false});
                for (const field in unitData[key]) {
                    if (unitData[key].hasOwnProperty(field)) {
                        const fld: string | undefined = this.SlkFieldToUnitField(field);
                        if (fld) {
                            let d: string = unitData[key][field];
                            if (d.startsWith('"')) {
                                d = d.substr(1, d.length - 2);

                            }
                            if (d === '_' || d === '-') {
                                d = '';
                            }
                            // @ts-ignore
                            u[fld] = this.CleanType(fld, d);
                        }
                    }
                }
                this.DefaultUnits.set(key, u);
            }
        }
        this.BaseUnitsLoaded = true;
    }

    public SaveObjectifiedJsonFile(filePath: string, unitMap: Map<string, WCUnit>): string {
        const saveobj: UnitsObjectified = {specs: {type: ObjectSpecType.UNIT}, objects: []};
        for (const [key, value] of unitMap.entries()) {
            const baseUnitId: string | undefined = value.baseUnit;
            if (!baseUnitId) {
                console.error('Base unit id invalid', value);
                continue;
            }
            const baseUNit: WCUnit | undefined = this.GetBaseUnit(baseUnitId);
            if (!baseUNit) {
                console.error('Base unit invalid', baseUNit);
                continue;
            }
            const obj: WCUnit = new WCUnit(value.ID, {isCustom: true, baseUnit: value.baseUnit});
            if (value.utub) {
                value.utub = value.utub.split('\n').join('|n');
            }
            for (const field in value) {

                if (value.hasOwnProperty(field)) {
                    // @ts-ignore
                    if (value[field] !== baseUNit[field]) {
                        // @ts-ignore
                        obj[field] = value[field];
                    }

                }

            }
            saveobj['objects'].push(obj);
        }
        if (filePath) {
            writeFileSync(filePath, JSON.stringify(saveobj, null, 2));
        }

        return filePath;

    }


    public CleanType(fieldName: string, data: string): any {
        const fldData: UnitField | undefined = this.FieldData.get(fieldName);
        if (!fldData) {
            return data;
        }
        switch (fldData.type) {
            case 'string':
                return data;
            case 'int':
                return Number(data);
            case 'unreal':
                return Number(data);
            case 'real':
                return Number(data);
            default:
                console.log('CleanType', `Couldn't find: ${fldData.type}`);
                return data;
        }
    }

    public LoadUnitFieldConstants(): Map<string, UnitField> {
        const fieldData: any = UnitMetaData;
        // console.log('loaded field data');
        for (const key in fieldData) {
            if (fieldData.hasOwnProperty(key)) {
                this.FieldData.set(key, fieldData[key]);
            }
        }
        const indexed: string[] = [];
        this.FieldData.forEach((value, key) => {
            if (value.index === '-1' || value.index === '0') {
                this.SlkFieldBindings.set(value.field, key);
            } else {
                this.SlkFieldBindings.set(value.field + value.index, key);
                indexed.push(value.field);
            }
        });
        indexed.forEach((value => {
            const binding: string | undefined = this.SlkFieldBindings.get(value);
            if (binding) {
                const d: UnitField | undefined = this.FieldData.get(binding);
                if (d) {
                    this.SlkFieldBindings.set(d.field, this.FIELD_ID_INDEXED);
                    this.SlkFieldBindings.set(d.field + d.index, d.ID);
                }
            } else {
                console.error(value);
            }
        }));
        return this.FieldData;
    }


}
