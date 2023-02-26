/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function(nums) {
    const N = nums.length;
    
    nums.sort((a,b) => a - b);
    
    let right = N - 1;
    let left = Math.floor(N/2) - 1;
    
    let count = 0;
    
    while (left >= 0 && Math.floor(N/2) - 1 < right) {
        if (nums[left] * 2 <= nums[right]) {
            count += 2;
            right -= 1;
            left -= 1;
        } else if (nums[left] * 2 > nums[right]) {
            left -= 1;
        }
    }
    
    return count;
};