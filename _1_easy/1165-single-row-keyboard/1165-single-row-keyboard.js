/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    const N = keyboard.length;
    
    const obj = {};
    keyboard.split("").forEach((v, i) => obj[v] = i);
    
    let res = obj[word[0]];
    
    for (let i = 1; i < word.length; i += 1) {
        const prv = word[i-1];
        const cur = word[i];
        
        res += Math.abs(obj[cur] - obj[prv]);
    }
    
    return res;
};