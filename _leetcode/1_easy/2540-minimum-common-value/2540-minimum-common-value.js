/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    const N1 = nums1.length;
    const N2 = nums2.length;
    
    let i1 = 0;
    let i2 = 0;
    
    while (i1 < N1 && i2 < N2) {
        if (nums1[i1] === nums2[i2]) {
            return nums1[i1];
        } else if (nums1[i1] > nums2[i2]) {
            i2 += 1;
        } else {
            i1 += 1;
        }
    }
    
    return -1;
};