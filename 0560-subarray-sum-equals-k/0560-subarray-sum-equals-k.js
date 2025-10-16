/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const N = nums.length;

    const map = new Map();
    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for (const num of nums) {
        sum += num;
        if (map.get(sum - k) !== undefined) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) ?? 0) + 1 );
    }

    return count;
};