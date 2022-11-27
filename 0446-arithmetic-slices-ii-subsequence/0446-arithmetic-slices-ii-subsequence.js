/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const N = nums.length;

    // dp[i][j] : nums[i...j] 
    const dp = Array(N+1).fill(null).map((_) => new Map());

    let res = 0;
    
    for (let i = 1; i < N; i += 1) {
        for (let j = 0; j < i; j += 1) {
            const diff = nums[i] - nums[j];

            let apsEndingAtI = dp[i].get(diff) || 0;
            let apsEndingAtJ = dp[j].get(diff) || 0;
            
            dp[i].set(diff, apsEndingAtI + apsEndingAtJ + 1)
            res += apsEndingAtJ;
        }
    }
    
    return res;
};