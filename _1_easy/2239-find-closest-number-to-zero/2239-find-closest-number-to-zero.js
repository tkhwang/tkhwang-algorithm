/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    const updated = nums.map((v,i) => [ v, Math.abs(v) ]);
    
    updated.sort((a,b) => a[1] - b[1] || b[0] - a[0]);
    
    return updated[0][0];
};