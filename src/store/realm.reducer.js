import {RealmActionType} from './realm.actions';
import {makeZone, cloneZone, increaseLoyalty} from '../model/zoneFactory';

const realm = (state = {}, action) => {
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
        case RealmActionType.ADD_LOYALTY:
            let zone = state[action.id];
            let newLoyaltyMap = increaseLoyalty(zone.loyaltyMap, action.factionId, action.amt);
            return Object.assign({}, state, {
                [action.id]: cloneZone(zone, newLoyaltyMap)});
        default:
            return state;
    }
}

export default realm;