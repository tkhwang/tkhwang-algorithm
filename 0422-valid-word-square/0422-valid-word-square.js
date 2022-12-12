/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
    const [ ROWS, COLS ] = [ words.length, words[0].length ];
    
    for (let c = 0; c < COLS; c += 1) {
        let t = "";
        for (let r = 0; r < ROWS; r += 1) {
            if (words[r][c] === undefined) break;
            t += words[r][c];
        }
        if (words[c] !== t) return false;
    }
    
    return true;
};