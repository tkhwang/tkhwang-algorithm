/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {

    const bisect = (array, target) => {
        const N = array.length;
        
        // [left, right]
        let left = 0;
        let right = N-1;
        
        while (left <= right) {
            const mid = Math.floor((left + right)/2);
            
            if (array[mid] === target) return mid;
            else if (array[mid] > target) {
                right = mid - 1;    
            } else if (array[mid] < target) {
                left = mid + 1;
            }
        }
        return -1;
    }    
    
    const res = [];
    
    for (const num of arr1) {
        const second = bisect(arr2, num);
        const third = bisect(arr3, num);
        
        if (second !== -1 && third !== -1) res.push(num);
    }
    
    return res;
};