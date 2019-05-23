import React from 'react';
import * as PIXI from 'pixi.js';

import field from '../assets/hexes/field.png';
import forest from '../assets/hexes/forest.png';
import fortress from '../assets/hexes/fortress.png';
import mountain from '../assets/hexes/mountain.png';
import plain from '../assets/hexes/plain.png';
import settlement from '../assets/hexes/settlement.png';
import water from '../assets/hexes/water.png';

const typeToImageMap = {
"field": field,
"forest": forest,
"fortress": fortress,
"mountain": mountain,
"plain": plain,
"settlement": settlement,
"water": water,
};

const offset = 7;

export default class Realm extends React.Component {

    constructor(props) {
        super();
        this.grid = props.grid;
        this.app = null;
        this.gameCanvas = null;
    }

    componentDidMount()  {
        this.app = new PIXI.Application({transparent: true});
        this.gameCanvas.appendChild(this.app.view);
        this.grid.forEach((hex) => {
            console.log(typeToImageMap[hex.type]);
            const sprite = PIXI.Sprite.from(typeToImageMap[hex.type]);
            const point = hex.toPoint();
            // add the hex's position to each of its corner points
            const corners = hex.corners().map(corner => corner.add(point));
            // separate the first from the other corners
            const [firstCorner, ...otherCorners] = corners;

            sprite.position.x = firstCorner.x;
            sprite.position.y = firstCorner.y + offset;

            // set up the hit area
            sprite.interactive = true;
            const points = corners.map((corner) => new PIXI.Point(corner.x, corner.y));
            sprite.hitArea = new PIXI.Polygon(points);

            // make sprite non-transparent when mouse is over it
            sprite.mouseover = function(mouseData) {
                this.alpha = 0.5;
            }
            
            // make sprite half-transparent when mouse leaves
            sprite.mouseout = function(mouseData) {
                this.alpha = 1;
            }

            this.app.stage.addChild(sprite);
        });
        this.app.start();
    }
    
    render() {
        let component = this;
        return (
          <div ref={(thisDiv) => {component.gameCanvas = thisDiv}} />
        );
      }
}