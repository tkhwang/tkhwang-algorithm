/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    const N = arr.length;
    
    const dp = {};
    let max = 1;
    
    for (const [ i, num ] of arr.entries()) {
        const before = dp[num - difference] || 0;
        dp[num] = before + 1;
        if (max < dp[num]) max = dp[num];
    }
    
    return max;    
};