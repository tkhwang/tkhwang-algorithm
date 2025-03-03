/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    const N = nums.length;
    const prefixSum = Array(N).fill(0);
    let sum = 0;
    for (const [ i, num ] of nums.entries()) {
        sum += num;
        prefixSum[i] = sum;
    }
    
    const res = Array(N).fill(0);
    let diff = 0;
    
    for (let i = 1; i < N; i += 1) {
        diff += nums[i] - nums[0];
        const local = i * nums[i] - prefixSum[i-1] + prefixSum[N-1] - prefixSum[i-1] - (N-i) * nums[i];
        res[i] = local;
    }
    res[0] = diff;
    
    return res;
};