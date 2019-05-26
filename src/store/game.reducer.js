import { combineReducers } from 'redux'
import realm from './realm.reducer';

const game = combineReducers({
    realm
});

export default game;