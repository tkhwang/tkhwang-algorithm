/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
  const bisect = (array, target) => {
      const N = array.length
    
      // [left, right] : Both inclusive ranges
      let left = 0
      let right = N - 1
    
      while (left <= right) {
        const mid = Math.floor((left + right) / 2)
    
        if (array[mid] === target) {
          return mid
        } else if (array[mid] < target) {
          left = mid + 1
        } else if (target < array[mid]) {
          right = mid - 1
        }
      }
      return -1
    }
  
  const res = [];
    
  for (const num of arr1) {
      const index2 = bisect(arr2, num);
      const index3 = bisect(arr3, num);
      
      if (index2 !== -1 && index3 !== -1) res.push(num);
  }
    return res;
  
};