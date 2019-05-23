import ZoneSpec from '../model/zoneSpec';

export default function MapImporter(args) {

    this.loadMap = function(map) {
        const tiles = map.tilesets[0].tiles;
        const tileMap = {};
        tiles.forEach((tileDef) => {
            tileMap[tileDef.id+1] = tileDef.type;
        });

        const width = map.layers[0].width;
        const height = map.layers[0].height;

        let rows = [];
        let currRow = [];
        let col = 0;

        // // Tiled places tiles in column-major
        // for(var col = 0; col < width; ++col) {
        //     for(var row = 0; row < height; ++row) {

        //     }
        // }

        map.layers[0].data.forEach((index) => {
            const type = tileMap[index];
            currRow.push(new ZoneSpec({type: type, loyaltyMap: {1: 0, 2: 0, 3: 0}}));
            ++col;
            if(col === width) {
                col = 0;
                rows.push(currRow);
                currRow = [];
            }
        });

        return rows;
    }


}