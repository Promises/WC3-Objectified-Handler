export enum DataType {
  STRING,
  INT,
  UNREAL,
  REAL
}

const DataTypeString: any[] = [
  ['string', "string"],
  ['int', "int"],
  ['unreal', "unreal"],
  ['real', "real"]
];
export const DataTypeMap: Map<string, DataType> = new Map<string, DataType>(DataTypeString);

export interface UnitFieldDefinition {
  id: string;
  verbose: string;
  type: string;
}

export interface SelectValue {
  value: string;
  display: string;
}

const UnitFieldsArray: any[] = [
  ['utip', {id: 'utip', verbose: 'Tooltip', type: "string"}],
  ['uhot', {id: 'uhot', verbose: 'Hotkey', type: "string"}],
  ['unam', {id: 'unam', verbose: 'Name', type: "string"}],
  ['unsf', {id: 'unsf', verbose: 'NameEditorSuffix', type: "string"}],
  ['utub', {id: 'utub', verbose: 'Ubertip', type: "string"}],
  ['uarm', {id: 'uarm', verbose: 'ArmorType', type: "string"}],
  ['utyp', {id: 'utyp', verbose: 'UnitClassification', type: "string"}],
  ['uabi', {id: 'uabi', verbose: 'Abilities', type: "string"}],
  ['ua2g', {id: 'ua2g', verbose: 'TargetsAllowed2', type: "string"}],
  ['ides', {id: 'ides', verbose: 'Description', type: "string"}],
  ['ua1g', {id: 'ua1g', verbose: 'TargetsAllowed1', type: "string"}],
  ['ubsl', {id: 'ubsl', verbose: 'BuildSound', type: "string"}],
  ['ua1t', {id: 'ua1t', verbose: 'AttackType1', type: "string"}],
  ['ucun', {id: 'ucun', verbose: 'Text - Improved for the mage: title', type: "string"}],
  ['ushb', {id: 'ushb', verbose: 'ShadowTexture', type: "string"}],
  ['uspa', {id: 'uspa', verbose: 'SpecialArt', type: "string"}],
  ['upap', {id: 'upap', verbose: 'PlacementRequires', type: "string"}],
  ['uani', {id: 'uani', verbose: 'RequiredAnimationNames', type: "string"}],
  ['uico', {id: 'uico', verbose: 'Icon', type: "string"}],
  ['ua2w', {id: 'ua2w', verbose: 'WeaponType2', type: "string"}],
  ['utra', {id: 'utra', verbose: 'UnitsTrained', type: "string"}],
  ['upgr', {id: 'upgr', verbose: 'UpgradesUsed', type: "string"}],
  ['uubs', {id: 'uubs', verbose: 'GroundTexture', type: "string"}],
  ['umki', {id: 'umki', verbose: 'ItemsMade', type: "string"}],
  ['ua2t', {id: 'ua2t', verbose: 'AttackType2', type: "string"}],
  ['umdl', {id: 'umdl', verbose: 'Model', type: "string"}],
  ['usei', {id: 'usei', verbose: 'ItemsSold', type: "string"}],
  ['ucut', {id: 'ucut', verbose: 'Text - Improved for the mage: tips', type: "string"}],
  ['upat', {id: 'upat', verbose: 'PathingMap', type: "string"}],
  ['ua2m', {id: 'ua2m', verbose: 'ProjectileArt2', type: "string"}],
  ['umvt', {id: 'umvt', verbose: 'MoveType', type: "string"}],
  ['ua1w', {id: 'ua1w', verbose: 'WeaponType1', type: "string"}],
  ['udaa', {id: 'udaa', verbose: 'DefaultActiveAbility', type: "string"}],
  ['urac', {id: 'urac', verbose: 'Race', type: "string"}],
  ['ua1m', {id: 'ua1m', verbose: 'ProjectileArt1', type: "string"}],
  ['ua2p', {id: 'ua2p', verbose: 'AreaOfEffectTargets2', type: "string"}],
  ['ures', {id: 'ures', verbose: 'ResearchesAvailable', type: "string"}],
  ['ubui', {id: 'ubui', verbose: 'StructuresBuilt', type: "string"}],
  ['udty', {id: 'udty', verbose: 'DefenseType', type: "string"}],
  ['ureq', {id: 'ureq', verbose: 'Requirements', type: "string"}],
  ['ushu', {id: 'ushu', verbose: 'ShadowImage', type: "string"}],
  ['ua1p', {id: 'ua1p', verbose: 'AreaOfEffectTargets1', type: "string"}],
  ['ucs1', {id: 'ucs1', verbose: 'WeaponSound1', type: "string"}],
  ['uhrt', {id: 'uhrt', verbose: 'HitPointsRegenerationType', type: "string"}],
  ['util', {id: 'util', verbose: 'Tilesets', type: "string"}],
  ['utar', {id: 'utar', verbose: 'TargetedAs', type: "string"}],
  ['uupt', {id: 'uupt', verbose: 'UpgradesTo', type: "string"}],
  ['uaap', {id: 'uaap', verbose: 'RequiredAnimationAttachments', type: "string"}],
  ['uabt', {id: 'uabt', verbose: 'AIPlacementType', type: "string"}],
  ['usnd', {id: 'usnd', verbose: 'SoundSet', type: "string"}],
  ['upoi', {id: 'upoi', verbose: 'PointValue', type: "int"}],
  ['ubld', {id: 'ubld', verbose: 'BuildTime', type: "int"}],
  ['urpp', {id: 'urpp', verbose: 'GroupSeparationParameter', type: "int"}],
  ['ua1d', {id: 'ua1d', verbose: 'DamageNumberOfDice1', type: "int"}],
  ['urtm', {id: 'urtm', verbose: 'RepairTime', type: "int"}],
  ['ubdg', {id: 'ubdg', verbose: 'IsABuilding', type: "int"}],
  ['usst', {id: 'usst', verbose: 'StockStartDelay', type: "int"}],
  ['uhpm', {id: 'uhpm', verbose: 'HitPointsMaximum', type: "int"}],
  ['uclg', {id: 'uclg', verbose: 'GreenTint', type: "int"}],
  ['usid', {id: 'usid', verbose: 'SightRadiusDay', type: "int"}],
  ['ua1q', {id: 'ua1q', verbose: 'AreaOfEffectSmall1', type: "int"}],
  ['ucam', {id: 'ucam', verbose: 'CategoryCampaign', type: "int"}],
  ['ua2b', {id: 'ua2b', verbose: 'DamageBase2', type: "int"}],
  ['ufma', {id: 'ufma', verbose: 'FoodProduced', type: "int"}],
  ['uscb', {id: 'uscb', verbose: 'ScaleProjectiles', type: "int"}],
  ['umpi', {id: 'umpi', verbose: 'ManaInitialAmount', type: "int"}],
  ['ua2q', {id: 'ua2q', verbose: 'AreaOfEffectSmall2', type: "int"}],
  ['umvs', {id: 'umvs', verbose: 'SpeedBase', type: "int"}],
  ['ubsi', {id: 'ubsi', verbose: 'GoldBountySidesPerDie', type: "int"}],
  ['ua2d', {id: 'ua2d', verbose: 'DamageNumberOfDice2', type: "int"}],
  ['uori', {id: 'uori', verbose: 'OrientationInterpolation', type: "int"}],
  ['ua2s', {id: 'ua2s', verbose: 'DamageSidesPerDie2', type: "int"}],
  ['utc1', {id: 'utc1', verbose: 'MaximumTargets1', type: "int"}],
  ['uhos', {id: 'uhos', verbose: 'DisplayAsNeutralHostile', type: "int"}],
  ['umpm', {id: 'umpm', verbose: 'ManaMaximum', type: "int"}],
  ['umh1', {id: 'umh1', verbose: 'ProjectileHoming1', type: "int"}],
  ['uhom', {id: 'uhom', verbose: 'HideMinimapDisplay', type: "int"}],
  ['udef', {id: 'udef', verbose: 'DefenseBase', type: "int"}],
  ['uspe', {id: 'uspe', verbose: 'CategorySpecial', type: "int"}],
  ['ua1b', {id: 'ua1b', verbose: 'DamageBase1', type: "int"}],
  ['udea', {id: 'udea', verbose: 'DeathType', type: "int"}],
  ['urpo', {id: 'urpo', verbose: 'GroupSeparationEnabled', type: "int"}],
  ['uept', {id: 'uept', verbose: 'ElevationSamplePoints', type: "int"}],
  ['ua2h', {id: 'ua2h', verbose: 'AreaOfEffectMedium2', type: "int"}],
  ['ulur', {id: 'ulur', verbose: 'RepairLumberCost', type: "int"}],
  ['uaen', {id: 'uaen', verbose: 'AttacksEnabled', type: "int"}],
  ['ugor', {id: 'ugor', verbose: 'RepairGoldCost', type: "int"}],
  ['ufle', {id: 'ufle', verbose: 'CanFlee', type: "int"}],
  ['urev', {id: 'urev', verbose: 'RevivesDeadHeroes', type: "int"}],
  ['ubpy', {id: 'ubpy', verbose: 'ButtonPositionY', type: "int"}],
  ['ufor', {id: 'ufor', verbose: 'FormationRank', type: "int"}],
  ['uine', {id: 'uine', verbose: 'PlaceableInEditor', type: "int"}],
  ['ubba', {id: 'ubba', verbose: 'GoldBountyBase', type: "int"}],
  ['ua1h', {id: 'ua1h', verbose: 'AreaOfEffectMedium1', type: "int"}],
  ['utc2', {id: 'utc2', verbose: 'MaximumTargets2', type: "int"}],
  ['ua2f', {id: 'ua2f', verbose: 'AreaOfEffectFull2', type: "int"}],
  ['ubpx', {id: 'ubpx', verbose: 'ButtonPositionX', type: "int"}],
  ['ulum', {id: 'ulum', verbose: 'LumberCost', type: "int"}],
  ['usma', {id: 'usma', verbose: 'StockMaximum', type: "int"}],
  ['ufoo', {id: 'ufoo', verbose: 'FoodCost', type: "int"}],
  ['ubdi', {id: 'ubdi', verbose: 'GoldBountyNumberOfDice', type: "int"}],
  ['ucbo', {id: 'ucbo', verbose: 'CanBuildOn', type: "int"}],
  ['ua1s', {id: 'ua1s', verbose: 'DamageSidesPerDie1', type: "int"}],
  ['utcc', {id: 'utcc', verbose: 'AllowCustomTeamColor', type: "int"}],
  ['usin', {id: 'usin', verbose: 'SightRadiusNight', type: "int"}],
  ['udro', {id: 'udro', verbose: 'DropItemsOnDeath', type: "int"}],
  ['ua2z', {id: 'ua2z', verbose: 'ProjectileSpeed2', type: "int"}],
  ['ua2r', {id: 'ua2r', verbose: 'Range2', type: "int"}],
  ['upri', {id: 'upri', verbose: 'Priority', type: "int"}],
  ['utco', {id: 'utco', verbose: 'TeamColor', type: "int"}],
  ['ua1f', {id: 'ua1f', verbose: 'AreaOfEffectFull1', type: "int"}],
  ['ua1z', {id: 'ua1z', verbose: 'ProjectileSpeed1', type: "int"}],
  ['udup', {id: 'udup', verbose: 'DefenseUpgradeBonus', type: "int"}],
  ['usle', {id: 'usle', verbose: 'Sleeps', type: "int"}],
  ['unbm', {id: 'unbm', verbose: 'ShowNeutralBuildingIcon', type: "int"}],
  ['usrg', {id: 'usrg', verbose: 'StockReplenishInterval', type: "int"}],
  ['uclr', {id: 'uclr', verbose: 'RedTint', type: "int"}],
  ['ua1r', {id: 'ua1r', verbose: 'Range1', type: "int"}],
  ['ulev', {id: 'ulev', verbose: 'Level', type: "int"}],
  ['uclb', {id: 'uclb', verbose: 'BlueTint', type: "int"}],
  ['umis', {id: 'umis', verbose: 'SpeedMinimum', type: "int"}],
  ['umas', {id: 'umas', verbose: 'SpeedMaximum', type: "int"}],
  ['ugol', {id: 'ugol', verbose: 'GoldCost', type: "int"}],
  ['umh2', {id: 'umh2', verbose: 'ProjectileHoming2', type: "int"}],
  ['umpr', {id: 'umpr', verbose: 'ManaRegeneration', type: "unreal"}],
  ['udp1', {id: 'udp1', verbose: 'DamagePoint1', type: "unreal"}],
  ['ua2c', {id: 'ua2c', verbose: 'Cooldown2', type: "unreal"}],
  ['uqd1', {id: 'uqd1', verbose: 'DamageFactorSmall1', type: "unreal"}],
  ['uhd1', {id: 'uhd1', verbose: 'DamageFactorMedium1', type: "unreal"}],
  ['umxp', {id: 'umxp', verbose: 'MaxPitch', type: "real"}],
  ['urb2', {id: 'urb2', verbose: 'RangeMotionBuffer2', type: "unreal"}],
  ['uacq', {id: 'uacq', verbose: 'AcquisitionRange', type: "unreal"}],
  ['umxr', {id: 'umxr', verbose: 'MaxRoll', type: "real"}],
  ['urun', {id: 'urun', verbose: 'RunSpeed', type: "real"}],
  ['ubs1', {id: 'ubs1', verbose: 'BackswingPoint1', type: "unreal"}],
  ['usca', {id: 'usca', verbose: 'Scale', type: "real"}],
  ['uwal', {id: 'uwal', verbose: 'WalkSpeed', type: "real"}],
  ['ubs2', {id: 'ubs2', verbose: 'BackswingPoint2', type: "unreal"}],
  ['urb1', {id: 'urb1', verbose: 'RangeMotionBuffer1', type: "unreal"}],
  ['umvf', {id: 'umvf', verbose: 'MinimumHeight', type: "unreal"}],
  ['udp2', {id: 'udp2', verbose: 'DamagePoint2', type: "unreal"}],
  ['uma2', {id: 'uma2', verbose: 'ProjectileArc2', type: "unreal"}],
  ['udl1', {id: 'udl1', verbose: 'DamageLossFactor1', type: "unreal"}],
  ['usr1', {id: 'usr1', verbose: 'DamageSpillRadius1', type: "unreal"}],
  ['uma1', {id: 'uma1', verbose: 'ProjectileArc1', type: "unreal"}],
  ['umvh', {id: 'umvh', verbose: 'FlyHeight', type: "unreal"}],
  ['uhd2', {id: 'uhd2', verbose: 'DamageFactorMedium2', type: "unreal"}],
  ['umvr', {id: 'umvr', verbose: 'TurnRate', type: "unreal"}],
  ['uhpr', {id: 'uhpr', verbose: 'HitPointsRegeneration', type: "unreal"}],
  ['uabr', {id: 'uabr', verbose: 'AIPlacementRadius', type: "unreal"}],
  ['ussc', {id: 'ussc', verbose: 'SelectionScale', type: "real"}],
  ['ulpz', {id: 'ulpz', verbose: 'ProjectileLaunchZ', type: "unreal"}],
  ['uerd', {id: 'uerd', verbose: 'ElevationSampleRadius', type: "real"}],
  ['ucol', {id: 'ucol', verbose: 'CollisionSize', type: "unreal"}],
  ['usd1', {id: 'usd1', verbose: 'DamageSpillDistance1', type: "unreal"}],
  ['ua1c', {id: 'ua1c', verbose: 'Cooldown1', type: "unreal"}],
  ['uqd2', {id: 'uqd2', verbose: 'DamageFactorSmall2', type: "unreal"}],
  ['uamn', {id: 'uamn', verbose: 'Minimum Attack Range', type: "int"}],
  ['ulfo', {id: 'ulfo', verbose: 'Looping Fade Out Rate', type: "int"}],
  ['ulfi', {id: 'ulfi', verbose: 'Looping Fade In Rate', type: "int"}],
  ['udtm', {id: 'udtm', verbose: 'Death Time (seconds)', type: "unreal"}],
  ['ubpr', {id: 'ubpr', verbose: 'Required Bone Names', type: "string"}],

];
export const UnitFieldsMap: Map<string, UnitFieldDefinition> = new Map<string, UnitFieldDefinition>(UnitFieldsArray);



export enum SLKTag {
  EMPTY = '',
  END = 'E'
}


export enum SLKFileDef {
  CAMPAIGN_UNIT_FUNC,
  UNIT_ABILITIES,
  UNIT_BALANCE,
  UNIT_DATA,
  UNIT_UI,
  UNIT_WEAPONS
}


export function FileName(filetype: SLKFileDef): string {
  switch (filetype) {
    case SLKFileDef.CAMPAIGN_UNIT_FUNC:
      return 'CampaignUnitFunc.txt';
    case SLKFileDef.UNIT_ABILITIES:
      return 'UnitAbilities.slk';
    case SLKFileDef.UNIT_BALANCE:
      return 'UnitBalance.slk';
    case SLKFileDef.UNIT_DATA:
      return 'UnitData.slk';
    case SLKFileDef.UNIT_UI:
      return 'UnitUI.slk';
    case SLKFileDef.UNIT_WEAPONS:
      return 'UnitWeapons.slk';

  }

}
