/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function(target, arr) {

    const obj = {};
    for (const [ i, num ] of target.entries()) {
        obj[num] = i;
    }
    
    console.log(obj);
    const candidates = [];
    
    for (const num of arr) {
        if (obj[num] === undefined) continue;
        candidates.push(obj[num]);
    }
    console.log(candidates);

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

    const piles = [];
    for (const num of candidates) {
        const index = bisectLeft(piles, num);
        if (index === piles.length) {
            piles.push(num);
        } else {
            piles[index] = num;
        }
    }
    
    const count = piles.length;
    
    return target.length - count;
};