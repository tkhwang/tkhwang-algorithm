/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function(word1, word2) {
    const N1 = word1.length;
    const N2 = word2.length;
    
    const map1 = Array(26).fill(0);
    const map2 = Array(26).fill(0);
    
    const getCode = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);
    
    for (const ch of word1) {
        const i = getCode(ch);
        map1[i] += 1;
    }
    
    for (const ch of word2) {
        const i = getCode(ch);
        map2[i] += 1;
    }
    
    const len1 = map1.filter((v) => v > 0).length;
    const len2 = map2.filter((v) => v > 0).length;
    
    if (N1 === N2 && len1 === len2) return true;
    
    for (let i = 0; i < 26; i += 1) {
        for (let j = 0; j < 26; j += 1) {
            if (map1[i] === 0|| map2[j] === 0 || i === j) continue;

            let localLen1 = len1;
            let localLen2 = len2;
            
            // i : -word1 +word2
            if (map1[i] === 1) localLen1 -= 1;
            if (map2[i] === 0) localLen2 += 1;
            
            // j : +word1 -word2
            if (map1[j] === 0) localLen1 += 1;
            if (map2[j] === 1) localLen2 -= 1;
            
            if (localLen1 === localLen2) return true;
        }
    }
    
    return false;
};