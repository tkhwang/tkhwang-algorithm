/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(N, k, row, column) {
    
    const generateArray = () => Array(N).fill(null).map((_) => Array(N).fill(0));
    let curBoard = generateArray();
    let nextBoard = generateArray();
    nextBoard[row][column] = 1.0;
    
    const [ ROWS, COLS ] = [ N, N ];
    
    const directions = [ [1,2],[2,1],[2,-1],[1,-2],[-1,2],[-2,1],[-2,-1],[-1,-2] ]
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);

    for (let i = 0; i < k; i += 1) {
        [curBoard, nextBoard] = [ nextBoard, generateArray() ];
        
        for (let r = 0; r < ROWS; r += 1) {
            for (let c = 0; c < COLS; c += 1) {
                if (curBoard[r][c] === 0.0) continue;
                
                for (const [ dR, dC ] of directions) {
                    const newR = r + dR;
                    const newC = c + dC;

                    if (!isValid(newR, newC)) continue;
                    nextBoard[newR][newC] += curBoard[r][c] / 8.0;
                }
            }
        }
    }

    let total = 0.0;
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            total += nextBoard[r][c];
        }
    }

    return total;
};