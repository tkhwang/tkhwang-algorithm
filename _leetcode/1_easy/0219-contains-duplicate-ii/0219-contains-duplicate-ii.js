/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const cache = {};
    
    for (const [ i, num ] of nums.entries()) {
        if (cache[num] === undefined) {
            cache[num] = [];
            cache[num].push(i);
        } else {
            for (const prvIndex of cache[num]) {
                if (Math.abs(prvIndex - i) <= k) return true;
            }
            cache[num].push(i);
        }
    }
    return false;
};