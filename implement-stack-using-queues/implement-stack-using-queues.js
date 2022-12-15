
var MyStack = function() {
    this.queue = [];
    this.sub = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    while (this.queue.length > 0) {
        this.sub.push(this.queue.shift());
    }
    
    this.queue.push(x);
    
    while (this.sub.length > 0) {
        this.queue.push(this.sub.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if (this.queue.length === 0) return -1;
    
    return this.queue.at(0);
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */