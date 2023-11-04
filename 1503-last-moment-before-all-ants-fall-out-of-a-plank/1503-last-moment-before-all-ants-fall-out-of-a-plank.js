/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(N, left, right) {
    let res = 0;
    
    for (const num of left) {
        res = Math.max(res, num);
    }
    
    for (const num of right) {
        res = Math.max(res, N - num);
    }
    
    return res;        
};