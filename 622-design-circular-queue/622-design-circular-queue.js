/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.storage = [];
    this.currentSize = 0;
    this.maxSize = k;
    this.front = 0;
    this.rear = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.currentSize >= this.maxSize) return false;
    
    this.rear = (++this.rear) % this.maxSize;
    this.storage[this.rear] = value;
    this.currentSize += 1;
    
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.currentSize === 0) return false;
    
    this.front = (++this.front) % this.maxSize;
    this.currentSize -= 1;
    
    return true;
    
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.currentSize === 0) return -1;
    
    return this.storage[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.currentSize === 0) return -1;
    
    return this.storage[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.currentSize === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.currentSize === this.maxSize;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */