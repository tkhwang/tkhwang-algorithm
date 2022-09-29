/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    return arr.sort((a,b) => Math.abs(a - x) - Math.abs(b-x))
            .slice(0, k)
            .sort((a,b) => a - b)
};