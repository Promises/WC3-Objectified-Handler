export class WCUnit {
    ID: string;
    baseUnit?: string;
    isCustom: boolean;
    utip?: string;
    uhot?: string;
    unam?: string;
    unsf?: string;
    utub?: string;
    uarm?: string;
    utyp?: string;
    uabi?: string;
    ua2g?: string;
    // ides?: string; // Cant find a use for it, only causing issues
    ua1g?: string;
    ubsl?: string;
    ua1t?: string;
    ucun?: string;
    ushb?: string;
    uspa?: string;
    upap?: string;
    uani?: string;
    uico?: string;
    ua2w?: string;
    utra?: string;
    upgr?: string;
    uubs?: string;
    umki?: string;
    ua2t?: string;
    umdl?: string;
    usei?: string;
    ucut?: string;
    upat?: string;
    ua2m?: string;
    umvt?: string;
    ua1w?: string;
    udaa?: string;
    urac?: string;
    ua1m?: string;
    ua2p?: string;
    ures?: string;
    ubui?: string;
    udty?: string;
    ureq?: string;
    ushu?: string;
    ua1p?: string;
    ucs1?: string;
    uhrt?: string;
    util?: string;
    utar?: string;
    uupt?: string;
    uaap?: string;
    uabt?: string;
    usnd?: string;
    upoi?: number;
    ubld?: number;
    urpp?: number;
    ua1d?: number;
    urtm?: number;
    ubdg?: number;
    usst?: number;
    uhpm?: number;
    uclg?: number;
    usid?: number;
    ua1q?: number;
    ucam?: number;
    ua2b?: number;
    ufma?: number;
    uscb?: number;
    umpi?: number;
    ua2q?: number;
    umvs?: number;
    ubsi?: number;
    ua2d?: number;
    uori?: number;
    ua2s?: number;
    utc1?: number;
    uhos?: number;
    umpm?: number;
    umh1?: number;
    uhom?: number;
    udef?: number;
    uspe?: number;
    ua1b?: number;
    udea?: number;
    urpo?: number;
    uept?: number;
    ua2h?: number;
    ulur?: number;
    uaen?: number;
    ugor?: number;
    ufle?: number;
    urev?: number;
    ubpy?: number;
    ufor?: number;
    uine?: number;
    ubba?: number;
    ua1h?: number;
    utc2?: number;
    ua2f?: number;
    ubpx?: number;
    ulum?: number;
    usma?: number;
    ufoo?: number;
    ubdi?: number;
    ucbo?: number;
    ua1s?: number;
    utcc?: number;
    usin?: number;
    udro?: number;
    ua2z?: number;
    ua2r?: number;
    upri?: number;
    utco?: number;
    ua1f?: number;
    ua1z?: number;
    udup?: number;
    usle?: number;
    unbm?: number;
    usrg?: number;
    uclr?: number;
    ua1r?: number;
    ulev?: number;
    uclb?: number;
    umis?: number;
    umas?: number;
    ugol?: number;
    umh2?: number;
    umpr?: number;
    udp1?: number;
    ua2c?: number;
    uqd1?: number;
    uhd1?: number;
    umxp?: number;
    urb2?: number;
    uacq?: number;
    umxr?: number;
    urun?: number;
    ubs1?: number;
    usca?: number;
    uwal?: number;
    ubs2?: number;
    urb1?: number;
    umvf?: number;
    udp2?: number;
    uma2?: number;
    udl1?: number;
    usr1?: number;
    uma1?: number;
    umvh?: number;
    uhd2?: number;
    umvr?: number;
    uhpr?: number;
    uabr?: number;
    ussc?: number;
    ulpz?: number;
    uerd?: number;
    ucol?: number;
    usd1?: number;
    ua1c?: number;
    uqd2?: number;
    uamn?: number;
    ulfo?: number;
    ulfi?: number;
    udtm?: number;
    ubpr?: string;

    public GetName(): string {
        return this.unam ? this.unam : '';
    }

    constructor(ID: string, data: Partial<WCUnit>) {
        Object.assign(this, data);
        if (!this['isCustom']) {
            this.isCustom = false;
        }
        this.ID = ID;
    }


    public setValues(data: Partial<WCUnit>): void {
        Object.assign(this, data);
    }


    public setDefaults(data: Partial<WCUnit>, baseUnitId: string): void {
        const ID: string = this.ID;
        Object.assign(this, data);
        this.ID = ID;
        this.isCustom = true;
        this.baseUnit = baseUnitId;

    }


}

export interface UnitField {
    section: string;
    ID: string;
    field: string;
    slk: string;
    index: string;
    category: string;
    displayName: string;
    sort: string;
    type: string;
    changeFlags: string;
    importType: string;
    stringExt: string;
    caseSens: string;
    canBeEmpty: string;
    minVal: string;
    maxVal: string;
    forceNonNeg: string;
    useHero: string;
    useUnit: string;
    useBuilding: string;
    useItem: string;
    useSpecific: string;
    version: string;
    editorName: string;
    editorType: string;
}

export enum ObjectSpecType {
    UNIT
}

export interface ObjectifiedSpecs {
    type: ObjectSpecType;
}

export interface UnitsObjectified {
    specs: ObjectifiedSpecs;
    objects: Partial<WCUnit>[];
}
