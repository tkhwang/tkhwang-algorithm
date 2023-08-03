/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    
    const letters = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    const n = digits.length;
    const result = [];
    
    const dfs = (cur, index) => {
        if (index >= n) {
            result.push(cur);
            return;
        }
        
        for (const ch of letters[digits[index]]) {
            dfs(cur + ch, index + 1)
        }
        
    }
    
    dfs("", 0)
    
    return result;
};