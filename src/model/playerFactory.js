let playerId = 0;

export function makePlayer(playerSpec) {
    let newPlayer = Object.assign({}, playerSpec, {id: playerId++});
    return addMethods(newPlayer);
}

const addMethods = function(player) {
    return Object.assign(player, {});
}