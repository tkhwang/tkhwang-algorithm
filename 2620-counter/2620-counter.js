/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    this.num = n;
    
    return function() {
        const old = this.num;
        this.num += 1;
        return old;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */