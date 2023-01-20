/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function(coins) {
    const N = coins.length;

    coins.sort((a,b) => a - b);
    
    let res = 1;
    for (const coin of coins) {
        if (coin > res) break;
        res += coin;
    }
    
    return res;
};