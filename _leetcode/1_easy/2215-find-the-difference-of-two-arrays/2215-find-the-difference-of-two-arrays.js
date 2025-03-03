/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    const res = [];
    const local1 = new Set();
    for (const num of nums1) {
        if (!set2.has(num)) local1.add(num);
    }
    res.push(Array.from(local1));
    
    const local2 = new Set();
    for (const num of nums2) {
        if (!set1.has(num)) local2.add(num);
    }
    res.push(Array.from(local2));

    return res;
};