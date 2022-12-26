/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const obj = {};
    for (let i = 0; i < order.length; i += 1) {
        obj[order[i]] = i + 1;
    }

    for (let i = 0; i < words.length - 1; i += 1) {
        for (let  j = 0; j < words[i].length; j += 1) {
            if (j >= words[i + 1].length) return false;
            
            if (words[i][j] === words[i+1][j]) continue;
            
            if (obj[words[i][j]] > obj[words[i+1][j]]) return false;
            
            break;
        }
    }
    
    return true;
};