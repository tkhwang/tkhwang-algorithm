/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    let res = "";
    
    for (let i = 1; i <= n; i += 1) {
        // binary
        res += i.toString(2)
        //decimal
        res = parseInt(res, 2) % 1000000007;
        //binary
        res = res.toString(2);
    }
    return parseInt(res, 2) % 1000000007
};