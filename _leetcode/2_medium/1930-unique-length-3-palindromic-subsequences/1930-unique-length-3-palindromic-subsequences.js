/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    
    const N = alphabets.length;
    let res = 0;
    const set = new Set();
    let count = 0;
    
    for (let i = 0; i < N; i += 1) {
        const ch = alphabets[i];
        const left = s.indexOf(ch);
        const right = s.lastIndexOf(ch);
        if (left < right) {
            for (const alpha of alphabets) {
                const mid = s.indexOf(alpha, left+1);
                if (mid !== -1 && mid < right) count += 1;
            }
        }
    }
    
    return count;
}
