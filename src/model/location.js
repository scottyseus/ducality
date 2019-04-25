export default function Location(args) {
    let {row, col} = args;

    this.getRow = function() {
        return row;
    }
    
    this.getCol = function() {
        return col;
    }
}