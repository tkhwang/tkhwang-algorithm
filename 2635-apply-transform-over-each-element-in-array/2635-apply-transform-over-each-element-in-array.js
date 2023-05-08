/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res = [];
    for (const [ i, n ]  of arr.entries()) {
        res.push(fn(n, i));
    }
    return res;
};