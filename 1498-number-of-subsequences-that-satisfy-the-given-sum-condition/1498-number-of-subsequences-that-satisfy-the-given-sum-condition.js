/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const N = nums.length;
    const MOD = 7 +10 ** 9;

    nums.sort((a,b) => a - b);
    
    const powers = Array(N + 1).fill(0);
    powers[0] = 1;
    for (let i = 1; i <= N; i += 1) {
        powers[i] = (powers[i-1] * 2) % MOD;
    }
    
    let left = 0;
    let right = N - 1;
    let res = 0;
    
    while (left <= right) {
        const sum = nums[left] + nums[right];
        
        if (sum <= target) {
            res += powers[right - left] % MOD;
            left += 1;
        } else {
            right -= 1;
        }
    }
    
    return res % MOD;
};