/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a - b });
    minHeap.enqueue(1);
    
    const res = [];
    const set = new Set();
    
    while (res.length < n) {
        const min = minHeap.dequeue();
        if (set.has(min)) continue;
        
        res.push(min);
        set.add(min);
        
        minHeap.enqueue(min * 2);
        minHeap.enqueue(min * 3);
        minHeap.enqueue(min * 5);
    }
    
    return res[n - 1];
};