/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    const N = nums1.length;
    
    const dp = Array(N + 1).fill(null).map((_) => Array(N + 1).fill(0));
    
    let max = -Infinity;
    for (let i = 1; i <= N; i += 1) {
        for (let j = 1; j <= N; j += 1) {
            if (nums1[i-1] === nums2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } 
            if (max < dp[i][j]) max = dp[i][j]
        }
    }
    return max;
};