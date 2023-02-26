/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function(word, m) {
    const N = word.length;
    const res = Array(N).fill(0);
    
    let num = 0;
    for (let i = 0; i < N; i += 1) {
        num += Number(word[i]);
        if (num % m === 0) res[i] = 1
        
        num = (num * 10) % m;
    }
    
    return res;
};