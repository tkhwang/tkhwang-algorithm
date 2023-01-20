/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let max = -Infinity;
    
    const cache = {};
    
    const dp = (num) => {
        if (num === 1) return 1;
        if (cache[num] !== undefined) return cache[num];
        
        let res = num === n ? 0 : num;
        
        for (let i = 1; i < num; i += 1) {
            const local = dp(i) * dp(num-i);
            res = Math.max(res, local);
        }
        
        return cache[num] = res;
    }
    
    return dp(n)
};