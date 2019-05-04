import React from 'react'
import Zone from './Zone';

let Realm = ({zoneMap}) => {

    let zoneComponents = Object.values(zoneMap).map((zoneSpec) => {
        return new Zone();
    });

    return <div>
        {zoneComponents}
    </div>;
};

export default Realm;