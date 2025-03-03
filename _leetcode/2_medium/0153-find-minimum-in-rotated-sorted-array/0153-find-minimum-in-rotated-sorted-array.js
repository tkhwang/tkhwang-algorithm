/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const N = nums.length;
    
    let left = 0;
    let right = N - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    
    return nums[left];
};