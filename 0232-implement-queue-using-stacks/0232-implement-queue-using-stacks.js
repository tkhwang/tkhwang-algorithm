
var MyQueue = function() {
    this.stackF = [];
    this.stackB = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackF.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // F -> B
    while (this.stackF.length > 0) {
        this.stackB.push(this.stackF.pop());
    }
    
    const pop = this.stackB.pop();
    
    while (this.stackB.length > 0) {
        this.stackF.push(this.stackB.pop());
    }
    
    return pop;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while (this.stackF.length > 0) {
        this.stackB.push(this.stackF.pop());
    }
    
    const front = this.stackB.at(-1);
    
    while (this.stackB.length > 0) {
        this.stackF.push(this.stackB.pop());
    }
    
    return front;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stackF.length === 0 && this.stackB.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */