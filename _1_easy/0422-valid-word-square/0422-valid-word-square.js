/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
    const [ ROWS, COLS ] = [ words.length, words[0].length ];
    
    for (const [ c, word ] of words.entries()) {
        let cols = "";
        for (let r = 0; r < ROWS; r += 1) {
            if (!words[r][c]) break;
            cols += words[r][c]
        }
        if (word !== cols) return false;
    }
    return true;
};