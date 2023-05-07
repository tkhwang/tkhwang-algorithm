/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    return new Counter(init);
};

class Counter {
    constructor(init) {
        this.init = init;
        this.cur = init;
    }
    
    increment() {
        this.cur += 1;
        return this.cur;
    }
    
    decrement() {
        this.cur -= 1;
        return this.cur;
    }
    
    reset() {
        this.cur = this.init;
        return this.cur;
    }
  }

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */