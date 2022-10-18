/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const N = nums.length;
    if (N < 2) return nums[0];

    const dp0 = Array(N).fill(0);
    dp0[0] = nums[0];
    dp0[1] = Math.max(nums[0], nums[1]);
    
    const dp1 = Array(N).fill(0);
    dp1[0] = 0;
    dp1[1] = nums[1];
    
    for (let i = 2; i < N-1; i += 1) {
        dp0[i] = Math.max(dp0[i-2] + nums[i], dp0[i-1]);
    }
    for (let i = 2; i < N; i += 1) {
        dp1[i] = Math.max(dp1[i-2] + nums[i], dp1[i-1]);
    }
    
    return Math.max(dp0[N-2], dp1[N-1]);
};