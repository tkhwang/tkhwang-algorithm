/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const [ ROWS, COLS ] = [ board.length, board[0].length ];
    
    const setRow = Array(ROWS).fill(null).map((_) => new Set());
    const setCol = Array(COLS).fill(null).map((_) => new Set());
    const setBox = Array(ROWS).fill(null).map((_) => new Set());
    
    const rc2box = (r,c) => 3*Math.floor(r/3) + Math.floor(c/3);
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (board[r][c] === ".") continue;
            
            setRow[r].add(+board[r][c]);
            setCol[c].add(+board[r][c]);
            setBox[rc2box(r,c)].add(+board[r][c]);
        }
    }
    
    const addSet = (r, c, value) => {
        setRow[r].add(+value);
        setCol[c].add(+value);
        setBox[rc2box(r,c)].add(+value);        
    }
    
    const deleteSet = (r, c, value) => {
        setRow[r].delete(+value);
        setCol[c].delete(+value);
        setBox[rc2box(r,c)].delete(+value);        
    }
    
    const possible = (r, c, value) => {
        if (setRow[r].has(value)) return false;
        if (setCol[c].has(value)) return false;
        if (setBox[rc2box(r,c)].has(value)) return false;
        return true;
    }
    
    const backtrack = (r, c) => {
        if (c === COLS) {
            r += 1;
            c = 0;
        }
        if (r === ROWS) {
            return true;
        }
        
        if (board[r][c] !== ".") return backtrack(r, c+1);
        
        for (let i = 1; i <= 9; i += 1) {
            if (!possible(r, c, i)) continue;
            
            board[r][c] = "" + i;
            addSet(r, c, i);
            
            if (backtrack(r, c+1)) return true;
            
            board[r][c] = ".";
            deleteSet(r, c, i);
        }
        return false;
    }
    
    backtrack(0, 0);
    
    return board;
};