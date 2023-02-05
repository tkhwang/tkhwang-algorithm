/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
    const N = nums.length;
    
    let left = Math.min(...nums);
    let right = Math.max(...nums);
    
    const check = (max, remain) => {
        for (let i = 0; i < N; i += 1) {
            if (nums[i] <= max) {
                remain -= 1;
                i += 1;
            } 
            if (remain === 0) return true;
        }
        return remain === 0;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (check(mid, k)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};