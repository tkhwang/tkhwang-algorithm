/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    const length = mountainArr.length()
    const top = binarySearch(1, length - 1, target, (mid, _) => mountainArr.get(mid) > mountainArr.get(mid - 1))

    const firstIndex = binarySearch(0, top, target, (mid, target) => mountainArr.get(mid) <= target)
    if (mountainArr.get(firstIndex) === target) return firstIndex
    
    const secondIndex = binarySearch(top, length - 1, target, (mid, target) => mountainArr.get(mid) >= target)
    if (mountainArr.get(secondIndex) === target) return secondIndex

    return -1
};

const binarySearch = (left, right, target, comparator) => {
    let mid = Math.floor((left + right) / 2)
    while(left <= right) {
        if (comparator(mid, target)) left = mid + 1
        else right = mid - 1
        mid = Math.floor((left + right) / 2)
    }
    return mid    
};