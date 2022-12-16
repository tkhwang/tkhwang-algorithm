/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    
    const obj = {};
    
    for (const num of nums2) {
        while (stack.length && stack.at(-1) < num) {
            const pop = stack.pop();
            obj[pop] = num;
        }
        stack.push(num)
    }
    
    const res = [];
    for (const num of nums1) {
        if (obj[num] === undefined) res.push(-1);
        else res.push(obj[num]);
    }
    
    return res;
};