import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import {createStore} from 'redux';
import ducalityState from './store/root.reducer';
import {setZones, addLoyalty} from './store/realm.actions';
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

zoneSpecs.push([
    new ZoneSpec({type: "type A", loyaltyMap: {1: 40, 2: 20, 3: 70}}),
    new ZoneSpec({type: "type B", loyaltyMap: {1: 40, 2: 20, 3: 70}}),
], [
    new ZoneSpec({type: "type A", loyaltyMap: {1: 40, 2: 20, 3: 70}}),
    new ZoneSpec({type: "type B", loyaltyMap: {1: 40, 2: 20, 3: 70}}),
]);

store.dispatch(setZones(zoneSpecs));

store.dispatch(addLoyalty({x: 0, y: 0}, 1, 70));

unsubscribe();

ReactDOM.render(<Provider store={store}><App/></Provider>
    , document.getElementById('root'));