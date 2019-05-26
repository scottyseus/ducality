import {SettingsActionType} from './settings.actions';

const settings = (state = {}, action) => {
    switch(action.type) {
        case SettingsActionType.SET_MAP:
            const map = action.map;
            return Object.assign({}, state, {map});
        default:
            return state;
    }
}

export default settings;