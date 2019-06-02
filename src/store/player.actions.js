/**
 * 
 * @param {PlayerSpec} playerSpec 
 */
export const addPlayer = (playerSpec) => ({
    type: PlayerActionType.ADD_PLAYER,
    playerSpec
});

export const PlayerActionType = {
    ADD_FACTION: 'ADD_PLAYER'
}