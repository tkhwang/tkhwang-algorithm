/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    /* 
           X, target, target, ...
            , left , right
              |
     */
    const bisectLeft = (array, target) => {
        let left = 0
        let right = array.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            
            if (array[mid] === target) {
                right = mid;
            } else if (array[mid] < target) {
                left = mid + 1;
            } else if (array[mid] > target) {
                right = mid;
            }
        }
        return left;
    }
    
    const N = nums.length;
    
    const piles = [];
    
    for (const [ i, num ] of nums.entries()) {
        const index = bisectLeft(piles, num);
        if (index === piles.length) piles.push(num);
        else piles[index] = num;
    }
    
    return piles.length;
};