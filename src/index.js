import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import ducalityState from './store/root.reducer';
import {addZones, setLoyalty} from './store/realm.actions';
import ZoneSpec from './model/zoneSpec';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const store = createStore(ducalityState);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

let zoneSpecs = [];
zoneSpecs.push(new ZoneSpec({type: "type A", location: "location1"}));

store.dispatch(addZones(zoneSpecs));
store.dispatch(setLoyalty(0, "occupant"));

unsubscribe();

