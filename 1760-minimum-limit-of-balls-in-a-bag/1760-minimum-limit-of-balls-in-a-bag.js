/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let left = 1;
    let right = 10 ** 9;

    const isOK = (max) => {
        let count = 0;
        for (const num of nums) {
            count += Math.floor((num - 1) / max);
        }
        return count <= maxOperations;
    }
    
    while (left <= right) {
        const mid = Math.floor((left + right)/ 2);
        
        if (isOK(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};