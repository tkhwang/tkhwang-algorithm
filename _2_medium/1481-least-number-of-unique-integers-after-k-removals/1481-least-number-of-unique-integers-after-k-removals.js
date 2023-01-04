/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const freq = {};
    for (const n of arr) {
        freq[n] = (freq[n] || 0) + 1;
    }
    
    // [ key, freq[key] ];
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[1] - b[1] });
    
    for (const key in freq) {
        minHeap.enqueue([ key, freq[key] ]);
    }
    
    while (k > 0) {
        const [ key, count ] = minHeap.dequeue();
        
        freq[key] -= 1;
        if (freq[key] === 0) {
            delete freq[key];
        } else {
            minHeap.enqueue([ key, freq[key] ]);
        }
        k -= 1;
    }
    
    return Object.keys(freq).length;
};