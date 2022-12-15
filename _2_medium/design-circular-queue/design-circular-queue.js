/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.k = k;
    this.array = Array(this.k).fill(0);
    this.len = 0;
    this.head = -1;
    this.tail = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    
    if (this.head === -1 && this.tail == -1) {
        this.head = 0;
        this.tail = 0;
    } else {
        this.tail = (this.tail + 1) % this.k;
    }
    this.array[this.tail] = value;
    this.len += 1;
    
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;
    
    this.len -= 1;
    
    if (this.isEmpty()) {
        this.head = -1;
        this.tail = -1;
    } else {
        this.head = (this.head + 1) % this.k;
    }
    
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.head === -1) return -1;
    
    return this.array[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.tail === -1) return -1;
    
    return this.array[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.len === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.len === this.k;
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