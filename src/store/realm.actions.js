export const addZones = (zoneSpecs) => ({
    type: RealmActionType.ADD_ZONES,
    zoneSpecs
});

export const setLoyalty = (id, factionId, loyalty) => ({
    type: RealmActionType.SET_LOYALTY,
    id,
    factionId,
    loyalty
});

export const RealmActionType = {
    ADD_ZONES: 'ADD_ZONES',
    SET_LOYALTY: 'SET_LOYALTY'
}