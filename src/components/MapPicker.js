import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainMenuButton from './MainMenuButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import MapImporter from '../util/mapImporter';

import {default as map1} from "../assets/maps/map1";

const maps = [map1];

const MapPicker = () => {
    let mapCards = [];
    maps.forEach(map => {
        mapCards.push(
        <Card>
            <CardContent>map1</CardContent>
        </Card>);
    });
    return mapCards;
};

export default MapPicker;