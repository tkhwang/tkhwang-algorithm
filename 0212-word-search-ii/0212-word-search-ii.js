/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const [ ROWS, COLS ] = [ board.length, board[0].length ];

    const res = [];
    const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    const genKey = (r, c) => `${r}:${c}`;
    
    const trie = {};
    for (const word of words) {
        let node = trie;
        for (const ch of word) {
            if (node[ch] === undefined) node[ch] = {};
            node = node[ch];
        }
        node.word = word;
    }
    
    const dfs = (r, c, parent) => {
        if (parent.word) {
            res.push(parent.word);
            parent.word = false;
        }
        
        if (!isValid(r, c)) return;
        
        const cur = board[r][c];
        if (parent[cur] === undefined) return;
        
        board[r][c] = "#";
        for (const [ dR, dC ] of directions) {
            const newR = r + dR;
            const newC = c + dC;
            
            dfs(newR, newC, parent[cur]);
        }
        board[r][c] = cur;
    }
    
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            dfs(r, c, trie)
        }
    }
    
    return res;
};