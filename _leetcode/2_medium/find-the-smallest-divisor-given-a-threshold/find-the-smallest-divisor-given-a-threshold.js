/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    const n = nums.length;
    const sum = nums.reduce((a,b) => a + b, 0);
    
    let left = 1;
    let right = Math.max(...nums);
    
    const isOK = (num) => {
        let sum = 0;
        for (const n of nums) {
            sum += Math.ceil(n / num)
        }
        return sum 
            <= threshold;
    }

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isOK(mid)) right = mid;
        else left = mid + 1;
    }
    
    return left;
};