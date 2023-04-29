/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {

    let left = 1;
    let right = 10 ** 6;
    
    const isOK = (mid) => {
        let division = 0;
        for (const num of nums) {
            division += Math.ceil(num / mid);
        }
        return division <= threshold;
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