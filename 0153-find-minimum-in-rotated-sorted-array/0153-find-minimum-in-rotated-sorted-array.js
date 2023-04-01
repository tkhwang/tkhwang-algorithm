/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const N = nums.length;
    
    if (N === 1) return nums[0];
    
    let left = 0;
    let right = N - 1;
    
    if (nums[0] < nums[right]) return nums[0];
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] >= nums[mid + 1]) return nums[mid + 1];
        if (nums[mid - 1] > nums[mid])  return nums[mid];        

        if (nums[0] < nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};