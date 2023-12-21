/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const [ ROWS, COLS ] = [ grid.length, grid[0].length ];

    const rowOnes = new Array(ROWS).fill(0);
    const colOnes = new Array(COLS).fill(0);

    for (let i = 0; i < ROWS; ++i) {
        for (let j = 0; j < COLS; ++j) {
            rowOnes[i] += grid[i][j];
            colOnes[j] += grid[i][j];
        }
    }

    for (let i = 0; i < ROWS; ++i) {
        for (let j = 0; j < COLS; ++j) {
            grid[i][j] = 2 * (rowOnes[i] + colOnes[j]) - ROWS - COLS;
        }
    }

    return grid;    
};