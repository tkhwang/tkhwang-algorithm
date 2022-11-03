/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const N1 = nums1.length;
    const N2 = nums2.length;
    
    const stack = [];
    const map = {};
    
    for (const num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            map[stack.pop()] = num;
        }
        stack.push(num)
    }
    
    while (stack.length) {
        map[stack.pop()] = -1;
    }
    
    console.log(map);
    
    const res = [];
    
    for (let i = 0; i < N1; i += 1) {
        res.push(map[nums1[i]])
    }
    
    return res;
};