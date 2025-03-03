/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let left = Math.max(...nums);
    let right = nums.reduce((a,b) => a + b, 0);
    
    const isOK = (largest) => {
        let sum = 0;
        let count = 1;
        for (const num of nums) {
            if (sum + num > largest) {
                count += 1;
                sum = num;
            } else {
                sum += num;
            }
        }
        return count <= k;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right)/2);
        
        if (isOK(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};