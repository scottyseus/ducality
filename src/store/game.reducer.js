import { combineReducers } from 'redux'
import realm from './realm.reducer';
import players from './player.reducer';

const game = combineReducers({
    realm,
    players
});

export default game;