let currentId = 0;

export function makeZone(zoneSpec, loyaltyMap = {}) {
    let id = currentId++;
    let newZone = Object.assign(zoneSpec, {
        id,
        loyaltyMap
    });

    return addMethods(newZone);
}

export function cloneZone(zone, loyaltyMap) {
    let newZone =  Object.assign({}, zone, {
        loyaltyMap
    });

    return addMethods(newZone);
}

const addMethods = function(zone) {
    return Object.assign(zone, {

        /**
         * Returns the id of faction with the most loyalty in this zone.
         * 
         * If multiple zones are tied, returns null.
         */
        getDominantFaction: () => {
            let sortedLoyalties = zone.loyaltyMap.entries();
            sortedLoyalties.sort((a,b)  => {
                if(a[1] < b[1]) {
                    return -1;
                } else if(a[1] === b[1]) {
                    return 0;
                } else {
                    return 1;
                }
            });
            if(sortedLoyalties[0][1] === sortedLoyalties[1][1]) {
                return null;
            }
            return sortedLoyalties[0][0]
        }
    });
}