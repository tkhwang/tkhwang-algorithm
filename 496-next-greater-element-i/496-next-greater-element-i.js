/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const dic = {};
    const stack = [];
    
    for (const num of nums2.reverse()) {
        while (stack.length && num > stack[stack.length - 1]) stack.pop();
        if (stack.length > 0) dic[num] = stack[stack.length - 1];
        stack.push(num)
    }
    
    const result = Array(nums1.length).fill(0);
    
    for (const [i, num] of nums1.entries()) {
        result[i] = dic[num] || -1;
    }
    
    return result
};