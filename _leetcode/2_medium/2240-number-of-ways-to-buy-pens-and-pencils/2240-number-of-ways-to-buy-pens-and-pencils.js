/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
    let res = 0;
    
    for (; total >= 0; total -= cost1) {
        res += Math.floor(total / cost2) + 1;
    }
    
    return res;
};