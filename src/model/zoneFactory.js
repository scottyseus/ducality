export function makeZone(zoneSpec) {
    let newZone = Object.assign({}, zoneSpec);

    return addMethods(newZone);
}

export function cloneZone(zone, loyaltyMap) {
    let newZone =  Object.assign({}, zone, {
        loyaltyMap
    });

    return addMethods(newZone);
}

export function increaseLoyalty(loyaltyMap, factionId, delta) {
    let newLoyaltyMap = Object.assign({}, loyaltyMap, 
        {[factionId]: loyaltyMap[factionId] + delta});
    return newLoyaltyMap;
}

const addMethods = function(zone) {
    return Object.assign(zone, {

        /**
         * Returns the id of faction with the most loyalty in this zone.
         * 
         * If multiple zones are tied, returns null.
         */
        getDominantFaction: () => {
            let sortedLoyalties = Object.entries(zone.loyaltyMap);
            sortedLoyalties.sort((a,b)  => {
                if(a[1] < b[1]) {
                    return 1;
                } else if(a[1] === b[1]) {
                    return 0;
                } else {
                    return -1;
                }
            });
            if(sortedLoyalties[0][1] === sortedLoyalties[1][1]) {
                return null;
            }
            return sortedLoyalties[0][0]
        }
    });
}