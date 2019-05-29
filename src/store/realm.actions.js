export const setZones = (zoneSpecs) => ({
    type: RealmActionType.SET_ZONES,
    zoneSpecs
});

export const addLoyalty = (location, playerId, amt) => ({
    type: RealmActionType.ADD_LOYALTY,
    location,
    playerId,
    amt
});

export const RealmActionType = {
    SET_ZONES: 'SET_ZONES',
    ADD_LOYALTY: 'ADD_LOYALTY'
}