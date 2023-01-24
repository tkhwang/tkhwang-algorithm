/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const [ ROWS, COLS ] = [ board.length, board[0].length ];
 
    let arr = [ -1 ];
    let pos = 0;
    let index = 1;
    
    for (let r = ROWS - 1; 0 <= r; r -= 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (pos % 2 === 0) {
                arr[index] = board[r][c] === -1 ? index : board[r][c];
            } else {
                arr[index] = board[r][ROWS - 1 - c] === -1 ? index : board[r][ROWS -1 -c];
            }
            index += 1;
        }
        pos += 1;
    }
    
    console.log(arr);
    
    const queue = [ 1 ];
    let steps = 0;
    
    const seen = new Set();
    seen.add(1);
    
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
            
            if (cur === ROWS * COLS) return steps;
            
            for (let next =  cur + 1; next <= Math.min(cur + 6, ROWS * COLS); next += 1) {
                if (seen.has(arr[next])) continue;
                
                seen.add(arr[next]);
                queue.push(arr[next]);
            }
        }
        steps += 1;
    }
    return -1;
};