/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    const N = nums.length;
    
    const res = [];
    let count = 0;
    
    for (let i = 0; i < N; i += 1) {
        for (let j = i + 1; j < N; j += 1) {
            for (let k = j + 1; k < N; k += 1) {
                if (nums[i] !== nums[j] && nums[j] !== nums[k] && nums[k] !== nums[i]) count += 1;
            }
        }
    }
    
    return count;
};