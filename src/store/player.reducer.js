import {PlayerActionType} from './player.actions';
import {makePlayer} from '../model/playerFactory';

const players = (state = {}, action) => {
    switch(action.type) {
        case PlayerActionType.ADD_FACTION:
            let newPlayer = makePlayer(action.playerSpec);
            return Object.assign({}, state, {[newPlayer.id]: newPlayer});
        default:
            return state;
    }
}

export default players;