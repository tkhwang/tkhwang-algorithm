/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const N = words.length;

    // counter[i][j] = i = word[0], j = word[1] 의 count 갯수 
    const counter = Array(26).fill(null).map((_) => Array(26).fill(0));
    
    let res = 0;
    
    for (const word of words) {
        const first = word[0].charCodeAt(0) - 'a'.charCodeAt(0);
        const second = word[1].charCodeAt(0) - 'a'.charCodeAt(0);
        
        if (counter[second][first]) {
            res += 4;
            counter[second][first] -= 1;
        } else {
            counter[first][second] += 1;
        }
    }
    
    for (let i = 0; i < 26; i += 1) {
        if (counter[i][i]) {
            res += 2;
            break;
        }
    }
    
    return res;
};