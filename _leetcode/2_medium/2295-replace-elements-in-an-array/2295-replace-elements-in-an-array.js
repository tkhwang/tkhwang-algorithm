/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    const N = nums.length;

    const map = new Map();
    
    for (let i = 0; i < N; i += 1) {
        const cur = nums[i];
        map.set(cur, i);
    }
    
    for (const [ u, v ] of operations) {
        nums[map.get(u)] = v;
        map.set(v, map.get(u));
        map.delete(u);
    }
    
    return nums;
};