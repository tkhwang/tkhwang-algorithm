/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const total = [...nums1, ...nums2].sort((a,b) => a - b);

    const isEven = total.length % 2 === 0;
    const mid = Math.floor(total.length / 2);
    
    return isEven 
        ? (total[mid - 1] + total[mid]) / 2
        :  total[mid] * 2 / 2;

};