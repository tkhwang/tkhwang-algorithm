/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
    const N = nums.length;
    
    let left = Math.min(...nums);
    let right = Math.max(...nums);
    
    const check = (max) => {
        let count = 0;
        for (let i = 0; i < N; i += 1) {
            if (nums[i] <= max) {
                count += 1;
                i += 1;
            } 
        }
        return count >= k;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (check(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};