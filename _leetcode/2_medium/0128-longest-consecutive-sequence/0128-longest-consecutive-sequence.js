/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums || nums.length === 0) return 0;
    
    const set = new Set(nums);
    let max = -Infinity;
    
    for (const num of nums) {
        if (!set.has(num - 1)) {
            let cur = num;
            let length = 0;
            while (set.has(cur)) {
                length += 1;
                cur += 1;
            }
            if (max < length) max = length;
        }
    }
    return max;
};