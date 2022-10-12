/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    let third = Infinity;
    
    for (const num of nums) {
        if (first >= num) {
            first = num;
        } else if (second >= num) {
            second = num;
        } else {
            return true;
        }
    }
    return false;
};