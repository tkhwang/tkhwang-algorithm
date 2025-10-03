/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqs = new Map();

    for (const num of nums) {
        freqs.set(num, (freqs.get(num) || 0) + 1)
    }

    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[1] - b[1] });

    for (const freq of freqs.keys()) {
        minHeap.enqueue([ freq, freqs.get(freq) ]);
        if (minHeap.size() > k) minHeap.dequeue();
    }

    console.log(minHeap)

    return minHeap.toArray().map(([ value, freq ]) => value);
};