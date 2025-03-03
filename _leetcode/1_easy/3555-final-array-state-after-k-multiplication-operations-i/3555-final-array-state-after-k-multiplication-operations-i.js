/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    const N = nums.length;

    // [ index, value ]
    const minHeap = new MinPriorityQueue({ compare: (a, b) => a[1] - b[1] || a[0] - b[0] });

    for (const [ index, value ] of nums.entries()) {
        minHeap.enqueue([ index, value ]);
    }

    while (k > 0 && minHeap.size() > 0) {
        const [ index, min ] = minHeap.dequeue();
        minHeap.enqueue([ index, min * multiplier ]);
        k -= 1;
    }

    const res = Array(N);

    while (minHeap.size()) {
        const [ index, value ] = minHeap.dequeue();
        res[index] = value;
    }

    return res;
};