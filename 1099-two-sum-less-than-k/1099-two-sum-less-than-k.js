/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    const N = nums.length;
    
    nums.sort((a,b) => a - b);

    let max = -Infinity;
    
    for (let i = 0; i < N; i += 1) {
        for (let j = i +1; j < N; j += 1) {
            const sum = nums[i] + nums[j];
            if (sum < k) {
                if (max < sum) max = sum;
            }
        }
    }
    return max === -Infinity ? -1 : max;
};