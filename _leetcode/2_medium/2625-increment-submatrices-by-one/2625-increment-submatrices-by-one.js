/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
    const ROWS = n;
    const COLS = n;

    const grid = Array(ROWS).fill(null).map(() => Array(COLS).fill(0));

    for (const [ beginR, beginC, endR, endC ] of queries) {
        for (let r = beginR; r <= endR; r += 1) {
            for (let c = beginC; c <= endC; c += 1) {
                grid[r][c] += 1;
            }
        }
    }
    return grid;
};