/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const num1ToNum2 = {};
    for (const [ i, num ] of nums2.entries()) {
        while (stack.length && nums2[stack.at(-1)] < num) {
            const prv = stack.pop();
            num1ToNum2[nums2[prv]] = num;
        }
        stack.push(i)
    }
    
    const res = [];
    for (const num of nums1) {
        res.push(num1ToNum2[num] || -1)
    }
    
    return res;
};