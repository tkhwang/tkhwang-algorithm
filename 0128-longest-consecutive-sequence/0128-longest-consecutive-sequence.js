/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max = -Infinity;
    
    for (const num of nums) {
        if (!set.has(num - 1)) {
            let cur = num;
            let count = 1;
            while (set.has(cur)) {
                if (max < count) max = count;
                count += 1;
                cur += 1;
            }
        }
    }
    return max === -Infinity ? 0 : max;
};