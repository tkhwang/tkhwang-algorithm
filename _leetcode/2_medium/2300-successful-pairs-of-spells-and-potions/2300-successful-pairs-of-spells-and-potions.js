/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const leftBound = (array, target, left = 0, right = array.length) => {
      // [left, right)

      while (left < right) {
        const mid = Math.floor((left + right) / 2)

        if (array[mid] === target) {
          right = mid
        } else if (array[mid] < target) {
          left = mid + 1
        } else if (array[mid] > target) {
          right = mid
        }
      }
      // index
      return left

      // check whether array[left] === target
      // if (left === array.length) return -1
      // return array[left] === target ? left : -1
    }
    
    const N = potions.length;
    
    potions.sort((a,b) => a - b);
    const res = [];
    
    for (const spell of spells) {
        const target = success / spell;
        
        const found = leftBound(potions, target);
        res.push(N - found);
    }
    return res;
};