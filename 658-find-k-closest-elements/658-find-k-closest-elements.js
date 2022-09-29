/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    const minHeap = new MinPriorityQueue({ compare: (a,b) => Math.abs(a-x) - Math.abs(b-x) || a - b });
    
    for (const n of arr) {
        minHeap.enqueue(n);
    }
    
    const result = [];
    while (k > 0) {
        result.push(minHeap.dequeue());
        k -= 1;
    }
    
    return result.sort((a,b) => a - b)
};