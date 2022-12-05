/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function(word) {
    const N = word.length;
    
    const set = new Set([ "a", "e", "i", "o", "u" ]);
    
    let sum = 0;
    for (let i = 0; i < N; i += 1) {
        const cur = word[i];
        if (set.has(cur)) {
            sum += (i - 0 + 1) * (N-1 - i + 1);
        }
    }
    return sum;
};