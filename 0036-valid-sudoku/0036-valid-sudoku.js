/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const [ ROWS, COLS ] = [ board.length, board[0].length ];
    const m = Math.floor(ROWS/3);
    
    const rowSet = Array(ROWS).fill(null).map((_) => new Set());
    const colSet = Array(COLS).fill(null).map((_) => new Set());
    const diaSet = Array(ROWS).fill(null).map((_) => new Set());
    
    const rc2dia = (r, c) =>  Math.floor(r/m)*m + Math.floor(c/m);
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            const cur = board[r][c];
            if (cur === ".") continue;
            
            if (rowSet[r].has(cur)) return false;
            rowSet[r].add(cur);
            if (colSet[c].has(cur)) return false;
            colSet[c].add(cur)
            if (diaSet[rc2dia(r, c)].has(cur)) return false;
            diaSet[rc2dia(r, c)].add(cur);
        }
    }
    
    return true;
};