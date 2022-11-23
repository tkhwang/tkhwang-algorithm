/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const [ ROWS, COLS ] = [ board.length, board[0].length ];
    
    const setRows = Array(ROWS).fill(null).map((_) => new Set());
    const setCols = Array(COLS).fill(null).map((_) => new Set());
    const setBoxs = Array(ROWS).fill(null).map((_) => new Set());
    
    const m = ROWS/3;
    const rc2box = (r, c) => Math.floor(r/m)*m + Math.floor(c/m);
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            const cur = board[r][c];
            if (cur === ".") continue;
            
            if (setRows[r].has(cur)) return false;
            setRows[r].add(cur);
            
            if (setCols[c].has(cur)) return false;
            setCols[c].add(cur);
            
            if (setBoxs[rc2box(r, c)].has(cur)) return false;
            setBoxs[rc2box(r, c)].add(cur);
        }
    }
    
    return true;
};