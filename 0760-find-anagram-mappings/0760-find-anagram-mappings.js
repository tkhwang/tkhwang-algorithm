/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
    const obj = {};
    for (const [ i, num ] of nums2.entries()) {
        obj[num] = i;
    }
    
    const res = [];
    for (const num of nums1) {
        res.push(obj[num])
    }
    
    return res;
};