/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const bisectLeft = (array, target, left = 0, right = array.length) => {
      // [left, right) half inclusive range

      while (left < right) {
        const mid = Math.floor((left + right) / 2)

        // left-most
        if (array[mid] >= target) {
          right = mid
        } else {
          left = mid + 1
        }
      }
      return left
    }
    
    const N = nums.length;
    const piles = [];

    for (const num of nums) {
        const index = bisectLeft(piles, num);
        
        if (index === piles.length) piles.push(num);
        else piles[index] = num;
    }
    
    return piles.length;
};