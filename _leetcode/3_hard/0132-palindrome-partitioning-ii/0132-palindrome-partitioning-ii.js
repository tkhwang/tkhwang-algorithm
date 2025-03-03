/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const N = s.length;
    
    // dpCuts[i][j] : s[i:j] 사이의 panlindrom cuts 갯수
    const dpCuts = Array(N).fill(null).map((_) => Array(N));
    const dpPalindrome = Array(N).fill(null).map((_) => Array(N));
    
    const isPalindrome = (start, end) => {
        if (start >= end) return true;
        if (dpPalindrome[start][end] !== undefined) return dpPalindrome[start][end];
        
        return dpPalindrome[start][end] = s[start] === s[end] && isPalindrome(start + 1, end - 1)
    }
    
    const dp = (start, end, count) => {
        if (start === end || isPalindrome(start, end)) return 0;
        if (dpCuts[start][end] !== undefined) return dpCuts[start][end];
        
        for (let i = start; i <= end; i += 1) {
            if (isPalindrome(start, i)) {
                count = Math.min(
                    count,
                    1 + dp(i + 1, end, count)
                )
            }
        }
        return dpCuts[start][end] = count;
    }
    
    return dp(0, N-1, N - 1)
};