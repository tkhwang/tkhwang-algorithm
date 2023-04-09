/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    if (p === 0) return 0;
    
    const N = nums.length;
    nums.sort((a,b ) => a - b);
    
    let left = 0;
    let right = nums[N-1] - nums[0];
    
    const isOK = (max) => {
        let count = 0;
        for (let i = 1; i < N; i += 1) {
            if (nums[i] - nums[i-1] <= max) {
                i += 1;
                count += 1;
            }
        }
        return count >= p;
    }
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isOK(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};