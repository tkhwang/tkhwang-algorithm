/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    this.cur = n;
    
    return function() {
        const res = this.cur;
        this.cur += 1;
        return res;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */