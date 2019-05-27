import { combineReducers } from 'redux'
import game from './game.reducer';

const match = combineReducers({
    game
});

export default match;