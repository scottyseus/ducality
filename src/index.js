import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import {createStore} from 'redux';
import ducalityState from './store/root.reducer';
import {addZones, addLoyalty} from './store/realm.actions';
import ZoneSpec from './model/zoneSpec';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const store = createStore(ducalityState);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

let zoneSpecs = [];

let loyaltyMap = {1: 10, 2: 20, 3: 70};
zoneSpecs.push(new ZoneSpec({type: "type A", location: "location1", loyaltyMap}));

store.dispatch(addZones(zoneSpecs));

store.dispatch(addLoyalty(0, 1, 70));

unsubscribe();

ReactDOM.render(<Provider store={store}><App/></Provider>
    , document.getElementById('root'));