/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    arr.sort((a,b) => Math.abs(a - x) - Math.abs(b - x));
    
    return arr.slice(0, k).sort((a,b) => a - b);
};