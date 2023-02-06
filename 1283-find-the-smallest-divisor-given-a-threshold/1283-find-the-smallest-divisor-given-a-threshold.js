/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let left = 1;
    let right = 10 ** 6;
    
    const isOK = (value) => {
        let res = 0;
        for (const num of nums) {
            res += Math.ceil(num / value);
        }
        
        return res <= threshold;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isOK(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};