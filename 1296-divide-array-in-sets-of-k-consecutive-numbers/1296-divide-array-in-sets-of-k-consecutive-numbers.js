/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    nums.sort((a,b) => a - b);
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    while (map.size > 0) {
        let [ cur, _ ] = map.entries().next().value;
        let remain = k;
        while (remain > 0) {
            if (map.get(cur) === undefined) return false;
            map.set(cur, map.get(cur) - 1);
            if (map.get(cur) === 0) map.delete(cur);
            cur += 1;
            remain -= 1;
        }
    }
    return true;
};