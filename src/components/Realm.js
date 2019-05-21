import React from 'react';
import * as PIXI from 'pixi.js';

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
            const graphics = new PIXI.Graphics()
            graphics.lineStyle(1, 0x999999)
            const point = hex.toPoint()
            // add the hex's position to each of its corner points
            const corners = hex.corners().map(corner => corner.add(point))
            // separate the first from the other corners
            const [firstCorner, ...otherCorners] = corners

            // move the "pen" to the first corner
            graphics.moveTo(firstCorner.x, firstCorner.y)
            // draw lines to the other corners
            otherCorners.forEach(({ x, y }) => graphics.lineTo(x, y))
            // finish at the first corner
            graphics.lineTo(firstCorner.x, firstCorner.y)

            this.app.stage.addChild(graphics)
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