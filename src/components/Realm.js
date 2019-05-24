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

const offset = 5;

export default class Realm extends React.Component {

    constructor(props) {
        super();
        this.grid = props.grid;
        this.app = null;
        this.gameCanvas = null;
    }

    renderHitArea(hex) {
        const graphics = new PIXI.Graphics();
        graphics.lineStyle(1, 0x000000);
        graphics.beginFill(0x999999);
        graphics.drawPolygon(hex);



        this.app.stage.addChild(graphics);
    }

    componentDidMount()  {
        this.app = new PIXI.Application({transparent: true});
        this.gameCanvas.appendChild(this.app.view);
        this.grid.forEach((hex) => {
            let sprite = PIXI.Sprite.from(typeToImageMap[hex.type]);
            let point = hex.toPoint();
            // add the hex's position to each of its corner points
            let corners = hex.corners().map(corner => corner.add(point));

            sprite.position.x = point.x;
            sprite.position.y = point.y;

            // set up the hit area
            let hitArea = new PIXI.Polygon(hex.corners().map(corner => new PIXI.Point(corner.x, corner.y + offset)));
            sprite.hitArea = hitArea; // new PIXI.Rectangle(50, 50, 50, 50);

            sprite.mouseover = function(mouseData) {
                this.alpha = 0.5;
            }

            sprite.mouseout = function(mouseData) {
                this.alpha = 1;
            }
            sprite.interactive = true;
            this.app.stage.addChild(sprite);
            // this.renderHitArea(hitArea);
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