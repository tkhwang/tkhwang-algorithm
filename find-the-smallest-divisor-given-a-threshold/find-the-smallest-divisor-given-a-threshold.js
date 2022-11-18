/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    const sum = nums.reduce((a,b) => a + b, 0);
    
    let left = 1;
    let right = Math.max(...nums);
    
    const isOK = (n) => {
        let sum = 0;
        for (const num of nums) {
            sum += Math.ceil(num / n);
        }
        return sum <= threshold;
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