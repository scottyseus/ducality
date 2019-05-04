export const addZones = (zoneSpecs) => ({
    type: RealmActionType.ADD_ZONES,
    zoneSpecs
});

export const addLoyalty = (id, factionId, amt) => ({
    type: RealmActionType.ADD_LOYALTY,
    id,
    factionId,
    amt
});

export const RealmActionType = {
    ADD_ZONES: 'ADD_ZONES',
    ADD_LOYALTY: 'ADD_LOYALTY'
}