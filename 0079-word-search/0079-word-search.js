/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const trie = {};
    
    let node = trie;
    for (const ch of word) {
        if (node[ch] === undefined) node[ch] = {};
        node = node[ch];
    }
    node["word"] = word;
    
    const [ ROWS, COLS ] = [ board.length, board[0].length ];

    const genKey = (r, c) => `${r}:${c}`;
    const directions = [ [1,0],[-1,0],[0,1],[0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    
    const dfs = (r, c, node, seen) => {
        const ch = board[r][c];
        if (node[ch] === undefined) return false;

        if (node[ch]["word"]) return true;

        let res = false;
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            if (!isValid(newR, newC)) continue;
            if (seen.has(genKey(newR, newC))) continue;
            
            seen.add(genKey(newR, newC));
            res = res || dfs(newR, newC, node[ch], seen);
            seen.delete(genKey(newR, newC));
        }
        return res;
    }
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            const ch = board[r][c];
            if (trie[ch] === undefined) continue;
            
            const seen = new Set();
            seen.add(genKey(r, c));
            
            if (dfs(r, c, trie, seen)) return true;
        }
    }
    
    return false;
};