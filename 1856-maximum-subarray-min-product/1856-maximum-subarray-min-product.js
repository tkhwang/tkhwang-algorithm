/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function(nums) {
    const N = nums.length;
    let max = -Infinity;
    const MOD = BigInt(7 + 10 ** 9);
    
    let sum = 0;
    const prefixSum = Array(N).fill(0);
    for (const [ i, num ] of nums.entries()) {
        sum += num;
        prefixSum[i] = sum;
    }
    
    for (let i = 0; i < N; i += 1) {
        let left = i
        let right = i;
        while (0 <= left && nums[left] >= nums[i]) left -= 1;
        left += 1;
        while (right < N && nums[i] <= nums[right]) right += 1;
        right -= 1;
        
        const localSum = prefixSum[right] - prefixSum[left] + nums[left];
        const local = BigInt(nums[i]) * BigInt(localSum);
        if (max < local) max = local
    }
    
    return Number(max  % MOD);
};