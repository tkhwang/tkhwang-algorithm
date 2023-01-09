
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.stack.length === 0) {
        this.stack.push([ val, val ]);
        return;
    }
    
    const min = this.stack.at(-1)[1];
    this.stack.push([
        val,
        Math.min(min, val)
    ])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length === 0) return -1;
    
    return this.stack.pop()[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length === 0) return -1;
    
    return this.stack.at(-1)[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.stack.length === 0) return -1;
    
    return this.stack.at(-1)[1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */