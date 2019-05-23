import ZoneSpec from '../model/zoneSpec';

export default function MapImporter(args) {

    this.loadMap = function(map) {
        const tiles = map.tilesets[0].tiles;
        const tileMap = {};

        // the grid is a column-major array
        const grid = map.layers[0].data;

        tiles.forEach((tileDef) => {
            tileMap[tileDef.id+1] = tileDef.type;
        });

        const width = map.layers[0].width;
        const height = map.layers[0].height;


        let rows = [];
        let currRow = [];
        // Tiled places tiles in column-major
        for(var col = 0; col < grid.length; col += height) {
            currRow = [];
            for(var row = 0; row < height; ++row) {
                const tileType = grid[row + col];
                const type = tileMap[tileType];
                currRow.push(new ZoneSpec({type: type, loyaltyMap: {1: 0, 2: 0, 3: 0}}));
            }
            rows.push(currRow);
        }

        return rows;
    }


}