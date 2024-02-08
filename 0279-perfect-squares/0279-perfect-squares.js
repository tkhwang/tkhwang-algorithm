/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(N) {
    const isSquare = (num) => num > 0 && Math.sqrt(num) % 1 === 0;
    const memo = {};
    
    const dp = (n) => {
        if (isSquare(n)) return 1;
        if (memo[n] !== undefined) return memo[n];
        
        let res = Infinity;
        for (let i = 1; i * i <= n; i += 1) {
            res = Math.min(res, 1 + dp(n - i*i));
        }
        return memo[n] = res;
    }
 
    return dp(N)
};