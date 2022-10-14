
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push([ val, Math.min(val, this.getMin() )]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const [ last, min ] = this.stack.pop();
    return last;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length === 0) return null;
    
    const [ last, min ] = this.stack[this.stack.length - 1] ;
    return last;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.stack.length === 0) return Infinity;
    
    const [ last, min ] = this.stack[this.stack.length - 1];
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */