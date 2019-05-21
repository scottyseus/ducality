/**
 * ZoneSpec objects contain the information necessary to create a Zone.
 * At a minimum, its type and location must be known.
 * 
 * @param {type, location} args 
 */
export default function ZoneSpec(args) {
    let {type, loyaltyMap} = args;

    this.type = type;
    this.loyaltyMap = loyaltyMap;
}