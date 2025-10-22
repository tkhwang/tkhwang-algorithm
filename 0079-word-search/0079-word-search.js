/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const N = word.length;
    const [ ROWS, COLS ] = [ board.length, board[0].length ];
    const directions = [ [ 1, 0], [-1, 0], [0, 1], [0, -1] ];
    const isValid = (r, c) => !(r < 0 || r >= ROWS || c < 0 || c >= COLS);
    const genKey = (r, c) => `${r}:${c}`;

    const backtrack = (r, c, index, seen) => {
        if (word[index] === undefined) return false;
        if (board[r][c] !== word[index]) return false;
        if (index >= N - 1) return true;

        let temp = false;
        for (const [ dR, dC ] of directions){
            const newR = r + dR;
            const newC = c + dC;

            if (!isValid(newR, newC)) continue;
            if (seen.has(genKey(newR, newC))) continue;

            seen.add(genKey(newR, newC));
            temp = temp || backtrack(newR, newC, index + 1, seen);
            seen.delete(genKey(newR, newC));
        }
        return temp;
    }

    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            const cur = board[r][c];
            if (cur !== word[0]) continue;

            const seen = new Set();
            seen.add(genKey(r, c))
            if(backtrack(r, c, 0, seen)) return true;
        }
    }
    return false;
};