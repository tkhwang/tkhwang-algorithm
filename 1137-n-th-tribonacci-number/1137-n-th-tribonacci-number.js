/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const cache = {};
    
    const func = (n) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (n === 2) return 1;
        if (cache[n] !== undefined) return cache[n];
        
        return cache[n] = func(n-3) + func(n-2) + func(n-1)
    }
    
    return func(n)
};