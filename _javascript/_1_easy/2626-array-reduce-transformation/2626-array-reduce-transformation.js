/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let cur = init;
    
    for (const [ i, num ] of nums.entries()) {
        cur = fn(cur, num);
    }
    
    return cur;
};