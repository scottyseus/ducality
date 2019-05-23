import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import {createStore} from 'redux';
import ducalityState from './store/root.reducer';
import {setZones} from './store/realm.actions';
import MapImporter from './util/mapImporter';

import {default as map1} from "./assets/maps/map1";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const store = createStore(ducalityState);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

let mapImporter = new MapImporter();
let zoneSpecs = mapImporter.loadMap(map1);
store.dispatch(setZones(zoneSpecs));

unsubscribe();

ReactDOM.render(<Provider store={store}><App/></Provider>
    , document.getElementById('root'));