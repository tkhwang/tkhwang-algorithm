/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    const N = nums.length;
    
    nums.sort((a,b) => a - b);
    
    let count = 0;
    let min = nums[0];
    for (let i = 1; i < N; i += 1) {
        const cur = nums[i];
        if (cur <= min + k) {
            
        } else {
            min = cur;
            count += 1;
        }
    }
    return count + 1;
};