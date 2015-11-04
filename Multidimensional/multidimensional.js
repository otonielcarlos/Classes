var omega = '\u03A9';
var alpha = '\u03B1'

var grid = [];

for (var row = 0; row < 10; row++) {
    grid.push([]);
    for (var col = 0; col < 10; col++) {
        if (col % 2 == 1) {
            grid[row].push(omega);
        } else {
            grid[row].push(alpha);
        }

    }
}

console.log(grid);