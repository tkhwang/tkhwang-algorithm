/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const s1 = new Set(nums1);
    const s2 = new Set(nums2);
    
    return [...s1].filter((v) => [...s2].includes(v));
};