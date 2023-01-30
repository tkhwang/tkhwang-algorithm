/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    const N = nums.length;

    const dp = Array(N).fill(0);
    let res = 0;
    
    for (let j = 0; j < N; j += 1) {
        let prvSmall = 0;
        // [ i, j ]
        for (let i = 0; i < j; i += 1) {
            if (nums[i] < nums[j]) {
                prvSmall += 1;
                res += dp[i];
            } else if (nums[i] > nums[j]) {
                dp[i] += prvSmall;
            }
        }
    }
    
    return res;
};