import { combineReducers } from 'redux'
import game from './game.reducer';
import settings from './settings.reducer';

const match = combineReducers({
    game,
    settings
});

export default match;