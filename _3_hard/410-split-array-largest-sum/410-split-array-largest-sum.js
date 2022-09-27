/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    let left = Math.max(...nums);
    let right = nums.reduce((a,b) => a + b, 0);
    
    const canSplit = (size) => {
        let count = 1;
        let sum = 0;
        
        for (const num of nums) {
            if (sum + num <= size) {
                sum += num;
            } else {
                count += 1;
                sum = num;
            } 
        }
        return count <= m;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (canSplit(mid)) right = mid;
        else left = mid + 1;
    }
    
    return left;
};