/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(wordsDict, word1, word2) {
    const N = wordsDict.length;
    
    let num1 = -1;
    let num2 = -1;
    let min = Infinity;
    
    for (const [ i, word ] of wordsDict.entries()) {
        const cur = wordsDict[i];
        
        if (cur === word1) num1 = i;
        if (num1 !== -1 && num2 !== -1 && num1 !== num2) min = Math.min(min, Math.abs(num1 - num2))
        
        if (cur === word2) num2 = i;
    }
    
     if (num1 !== -1 && num2 !== -1 && num1 !== num2) min = Math.min(min, Math.abs(num1 - num2))
    
    return min;
};