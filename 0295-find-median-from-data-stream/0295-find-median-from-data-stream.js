
var MedianFinder = function() {
    // [mid...highest]
    this.minHeap = new MinPriorityQueue({ compare: (a,b) => a - b });
    // [lowest...mid]
    this.maxHeap = new MaxPriorityQueue({ compare: (a,b) => b - a });
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.maxHeap.enqueue(num);
    
    if (this.maxHeap.size() && this.minHeap.size() && this.maxHeap.front() > this.minHeap.front()) {
        this.minHeap.enqueue(this.maxHeap.dequeue());
    }
    
    if (this.minHeap.size() + 1 < this.maxHeap.size()) {
        this.minHeap.enqueue(this.maxHeap.dequeue());
    }
    
    if (this.maxHeap.size() + 1 < this.minHeap.size()) {
        this.maxHeap.enqueue(this.minHeap.dequeue());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const minHeapLength = this.minHeap.size();
    const maxHeapLength = this.maxHeap.size();
    
    if (minHeapLength === maxHeapLength) {
        return (this.minHeap.front() + this.maxHeap.front()) / 2
    } else {
        return minHeapLength > maxHeapLength ? this.minHeap.front() : this.maxHeap.front();
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */