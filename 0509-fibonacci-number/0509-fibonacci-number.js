/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const cache = {};
    
    const fib = (n) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (cache[n] !== undefined) return cache[n];
        
        return cache[n] = fib(n - 1) + fib(n - 2);
    }
    
    return fib(n)
};