import React from 'react';
import Hexagon from 'react-hexagon'

const Zone = function() {
    return <Hexagon
            flatTop
            style={{stroke: 'orange', strokeWidth: 25}}>
            <text x="50%" y="65%">SVG text!</text>
        </Hexagon>;
};

export default Zone;