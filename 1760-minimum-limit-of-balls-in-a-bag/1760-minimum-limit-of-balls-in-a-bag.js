/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    
    /*
         ---------
                 |
                 |
                 ----------
     [left right] 
       
                ----------
                |
                |
       ----------
                [left, right]
     */
    
    let left = 1;
    let right = 10 ** 9;
    
    const isOK = (max) => {
        let sum = 0;
        for (const num of nums) {
            sum += Math.floor((num - 1) / max);
        }
        return sum <= maxOperations;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isOK(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right
};