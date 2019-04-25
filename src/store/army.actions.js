export const consumeSupplies = (army, amt) =>  ({
    type: 'CONSUME_SUPPLIES',
    army,
    amt
});

export const recruitUnit = (army, type, experience, loyalty) => ({
    type: 'RECRUIT_UNIT',
    army,
    unit
});

export const disbandUnit = (unit) => ({
    type: 'DISBAND_UNIT',
    army,
    unit
});

export const move = (army, zone) => ({
    type: 'MOVE',
    army,
    zone
});

export const promoteUnit = (unit) => ({
    type: 'PROMOTE',
    unit
});

