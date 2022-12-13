
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.stack.length > 0) {
        const [ , min ] = this.stack.at(-1);
        
        this.stack.push([ val, Math.min(min, val) ]);
    } else {
        this.stack.push([ val, val ]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.length === 0) return -1;
    
    const [ value, min ] = this.stack.pop();
    return value;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length === 0) return -1;
    
    const [ value, ] = this.stack.at(-1);
    return value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
if (this.stack.length === 0) return -1;
    
    const [ ,min ] = this.stack.at(-1);
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