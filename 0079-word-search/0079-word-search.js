/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const N = word.length;
    const [ ROWS, COLS ] = [ board.length, board[0].length ];
    
    const genKey = (r, c) => `${r}:${c}`;
    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    const dfs = (r, c, index) => {
        if (board[r][c] !== word[index]) return false;
        const org = board[r][c];
        if (index >= N - 1) return true;
        
        let res = false;
        board[r][c] = "0"
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            if (!isValid(newR, newC)) continue;
            // if (seen.has(genKey(newR, newC))) continue;
            if (board[newR][newC] === "0") continue;
            
            res = res || dfs(newR, newC, index + 1);
        }
        board[r][c] = org;
        return res;
    }
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (board[r][c] === word[0]) {
                if (dfs(r, c, 0)) return true;
            }
        }
    }
    
    return false;
};