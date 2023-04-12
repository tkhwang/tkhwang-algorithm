/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    nums.sort((a,b) => a - b);
    
    const obj = {};
    const set = new Set();
    for (const num of nums) {
        // check
        if (obj[num - k] !== undefined) {
            for (const j of obj[num - k]) {
                const pairs = [ num, j ].sort();
                const key = pairs.join(":");
                if (!set.has(key)) set.add(key);
            }
        }
        // save
        if (obj[num] === undefined) obj[num] = [];
        obj[num].push(num);
    }
    
    return set.size;
};