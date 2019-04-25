import {RealmActionType} from './realm.actions';
import {makeZone, cloneZone} from '../model/zoneFactory';



const changeLoyalties = function(loyaltyMap, factionId, loyalty) {
    let newLoyaltyMap = Object.assign({}, loyaltyMap);
    let currentLoyaly = loyaltyMap[factionId];
    let loyaltyDelta = loyalty - currentLoyaly;

    newLoyaltyMap[factionId] = loyalty;

    let otherDeltas = loyaltyDelta / (loyaltyMap.size() - 1);

    Object.keys(newLoyaltyMap).forEach((key) => {
        if(key === factionId) {
            return;
        }
        
    });

    return newLoyaltyMap;
}

const realm = (state = [], action) => {
    switch(action.type) {
        case RealmActionType.ADD_ZONES:
            let zoneMap = {};
            action.zoneSpecs.forEach((zoneSpec) => {
                let newZone = makeZone(zoneSpec);
                zoneMap[newZone.id] = newZone;
            });
            // overwrites existing zones with zame IDs as
            // new zones
            return Object.assign({}, state, zoneMap);
        case RealmActionType.SET_LOYALTY:
            let zone = state[action.id];
            return Object.assign({}, state, {
                [action.id]: cloneZone(zone, action.occupant)});
        default:
            return state;
    }
}

export default realm;