/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const N = nums.length;
    
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a - b });
    
    for (const num of nums) {
        minHeap.enqueue(num);
        if (minHeap.size() > k) minHeap.dequeue();
    }
    
    return minHeap.front();
};