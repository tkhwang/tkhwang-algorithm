
var MedianFinder = function() {
    // [0 ... half]
    this.maxHeap = new MaxPriorityQueue({ compare: (a,b) => b - a });
    // [half ... max]
    this.minHeap = new MinPriorityQueue({ compare: (a,b) => a - b });
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    
    this.maxHeap.enqueue(num);
    
    if (this.maxHeap.size() && this.minHeap.size() &&  this.maxHeap.front() > this.minHeap.front()) {
        this.minHeap.enqueue(this.maxHeap.dequeue());
    }
    
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
        this.minHeap.enqueue(this.maxHeap.dequeue());
    }
    if (this.minHeap.size() > this.maxHeap.size() + 1) {
        this.maxHeap.enqueue(this.minHeap.dequeue());
    }    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const maxSize = this.maxHeap.size();
    const minSize = this.minHeap.size();

    if (maxSize === minSize) return (this.maxHeap.front() + this.minHeap.front()) / 2;

    return maxSize > minSize ? this.maxHeap.front() : this.minHeap.front();
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */