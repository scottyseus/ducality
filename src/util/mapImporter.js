import ZoneSpec from '../model/zoneSpec';

export default function MapImporter(args) {

    this.importMap = function(map) {
        const tiles = map.tilesets[0].tiles;
        const tileMap = {};

        // the grid is a column-major array
        const grid = map.layers[0].data;

        tiles.forEach((tileDef) => {
            tileMap[tileDef.id+1] = tileDef.type;
        });

        const width = map.layers[0].width;
        const height = map.layers[0].height;

        let i = 0;
        let rows = [];
        let currRow = [];
        // Tiled places tiles in column-major
        grid.forEach((el) => {
            const tileType = el;
            const type = tileMap[tileType];
            currRow.push(new ZoneSpec({type: type, loyaltyMap: {1: 0, 2: 0, 3: 0}}));
            ++i;
            if(i === width) {
                i = 0;
                rows.push(currRow);
                currRow = [];
            }
        });
        // for(var row = 0; row < grid.length; row += width) {
        //     currRow = [];
        //     for(var col = 0; col < width; ++col) {
        //         const tileType = grid[row + col];
        //         const type = tileMap[tileType];
        //         currRow.push(new ZoneSpec({type: type, loyaltyMap: {1: 0, 2: 0, 3: 0}}));
        //     }
        //     rows.push(currRow);
        // }

        return rows;
    }


}