/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumXOR = function(nums) {
    let res = 0;
    
    for (const num of nums) {
        res = res | num;
    }
    
    return res;
};