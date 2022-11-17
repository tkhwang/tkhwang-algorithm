/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max = 0;
    
    for (const num of nums) {
        if (!set.has(num - 1)) {
            let k = 0;
            while (set.has(num + k)) {
                k += 1;
            }
            if (max < k) max = k;
        }
    }
    
    return max;
};