/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = [];
    
    for (const [ i, num ] of nums1.entries()) {
        const index = nums2.indexOf(num);
        if (index === -1 ) continue;
        
        result.push(num);
        nums2.splice(index, 1);
    }
    
    return result;
};