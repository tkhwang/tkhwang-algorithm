/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const n = nums.length;
    
    let sum = 0;
    const map = new Map();
    map.set(0, 1);
    
    let res = 0;
    
    for (let i = 0; i < n; i += 1) {
        sum += nums[i];
        if (map.has(sum - goal)) res += map.get(sum - goal);
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return res;
};