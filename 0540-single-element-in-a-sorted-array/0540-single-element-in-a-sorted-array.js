/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    const N = nums.length;
    
    let left = 0;
    let right = N - 1;
    
    const check = (index) => {
        return nums[index] !== nums[index + 1];
    }
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid % 2 === 1) mid -= 1;
        
        if (check(mid)) {
            right = mid - 2;
        } else {
            left = mid + 2;
        }
    }
    return nums[left];
};