/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    let res = 1, mod = 10**9 + 7;
    
    for (let i = 1; i <= n; i++)
        res = res * (i * 2 - 1) * i % mod;
    
    return res;    
};