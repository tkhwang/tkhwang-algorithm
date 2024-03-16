/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const N = nums.length;
    
    const hash = { 0: -1 };
    let count = 0;
    let max = 0;
    
    for (let i = 0; i < N; i += 1) {
        if (nums[i] === 0) count -= 1;
        else count += 1;
        
        if (hash[count] !== undefined) {
            max = Math.max(max, i - hash[count]);
        } else {
            hash[count] = i;
        }
    }
    return max;
};