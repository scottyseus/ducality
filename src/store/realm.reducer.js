import {RealmActionType} from './realm.actions';
import {makeZone, cloneZone, increaseLoyalty} from '../model/zoneFactory';
import {extendHex, defineGrid} from 'honeycomb-grid';
import ZoneSpec from '../model/zoneSpec';

const Hex = extendHex({
    size: {height: 40, width: 48}
});
const Grid = defineGrid(Hex);

const realm = (state = {}, action) => {
    switch(action.type) {
        case RealmActionType.SET_ZONES:
            let zones = [];
            action.zoneSpecs.forEach((zoneSpecRow, row) => {
                zoneSpecRow.forEach((zoneSpec, col) => {
                    let newZone = makeZone(zoneSpec);
                    if(zones[row] === undefined) {
                        zones[row] = [];
                    }
                    zones[row][col] = Hex(row,col, newZone);;
                });
            });
            
            return Object.create(Grid(zones.flat()));
        case RealmActionType.ADD_LOYALTY:
            let newGrid = Object.create(state);
            let zone = newGrid.get(action.location);
            let newLoyaltyMap = increaseLoyalty(zone.loyaltyMap, action.factionId, action.amt);
            let newZone = cloneZone(new ZoneSpec(zone), newLoyaltyMap);
            newGrid.set(action.location, Hex(action.location.x, action.location.y, newZone));
            return newGrid;
        default:
            return state;
    }
}

export default realm;