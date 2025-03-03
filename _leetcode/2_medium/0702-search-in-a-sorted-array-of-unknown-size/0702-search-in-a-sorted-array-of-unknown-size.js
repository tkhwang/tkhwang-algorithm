/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
    let left = 0;
    let right = 10 ** 4;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (reader.get(mid) === undefined) {
            right = mid - 1;
        } else if (reader.get(mid) === target) {
            return mid;
        } else if (reader.get(mid) < target) {
            left = mid + 1;
        } else if (reader.get(mid) > target) {
            right = mid - 1;
        }
    }
    return -1;
};