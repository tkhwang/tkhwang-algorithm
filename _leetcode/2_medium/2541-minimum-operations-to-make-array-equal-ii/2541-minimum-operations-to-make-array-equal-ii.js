/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums1, nums2, k) {
    const N = nums1.length;

    let pos = 0;
    let nes = 0;
    
    for (let i = 0; i < N; i += 1) {
        if (nums1[i] === nums2[i]) continue;
        if (Math.abs(nums1[i] - nums2[i]) % k !== 0) return -1;
        
        if (nums1[i] > nums2[i]) {
            pos += (nums1[i] - nums2[i]) / k;
        } else if (nums1[i] < nums2[i]) {
            nes += (nums2[i] - nums1[i]) / k;
        }
    }

    return pos === nes ? pos : -1;
};