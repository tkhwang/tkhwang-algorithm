/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    const N1 = nums1.length;
    const N2 = nums2.length;
    
    // dp[i][j] 
    const dp = Array(N1 + 1).fill(null).map((_) => Array(N2 + 1).fill(0));
    
    for (let i = 1; i <= N1; i += 1) {
        for (let j = 1; j <= N2; j += 1) {
            if (nums1[i-1] === nums2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(
                    dp[i-1][j],
                    dp[i][j-1]
                )
            }
        }
    }
    return dp[N1][N2];    
};