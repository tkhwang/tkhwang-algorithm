/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
    const N = obstacles.length;
   
    const bisectRight = (array, target, left = 0, right = array.length) => {
      // [left, right) half inclusive range
      while (left < right) {
        const mid = Math.floor((left + right) / 2)

        // right-most
        if (array[mid] > target) {
          right = mid
        } else {
          left = mid + 1
        }
      }
      // left is insertion point. array[left] is NOT the same as target.
      return left
    }

    const piles = [];
    const res = [];
    
    for (const [ i, obstacle ] of obstacles.entries()) {
        const index = bisectRight(piles, obstacle);
        
        if (index === piles.length) {
            piles.push(obstacle)
        } else {
            piles[index] = obstacle;
        }
        res[i] = index + 1;
    }
    
    return res;
};