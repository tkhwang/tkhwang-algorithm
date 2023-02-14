/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const N = nums.length;
    const MOD = 7 +10 ** 9;
    
    const prefixSum = [ nums[0] ];
    for (let i = 1; i < N; i += 1) {
        prefixSum.push(nums[i] + prefixSum[i-1]);
    }
    
    const res = [];
    
    for (let i = 0; i < N; i += 1) {
        for (let j = i; j < N; j += 1) {
            // [i, j]
            if (i === j) {
                res.push(nums[i]);
            } else {
                res.push(prefixSum[j] - prefixSum[i] + nums[i]);
            }
        }
    }
    
    res.sort((a,b) => a - b);
    
    let result = 0;
    for (let i = left - 1; i <= right - 1; i += 1) {
        result += res[i];
        result %= MOD;
    }
    
    return result % MOD;
};