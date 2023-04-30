/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => b - a });
    
    for (const num of nums) {
        maxHeap.enqueue(num);
    }
    
    let sum = 0;
    while (k > 0) {
        const max = maxHeap.dequeue();
        sum += max;
        maxHeap.enqueue(max + 1);
        k -= 1;
    }
    
    return sum;
};