/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const N = nums.length;
    
    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => b[0] - a[0] });
    
    for (let i = 0; i < k; i += 1) {
        maxHeap.enqueue([ nums[i], i ]);
    }

    const res = [];
    res.push(maxHeap.front()[0]);
    
    for (let i = k; i < N; i += 1) {
        maxHeap.enqueue([ nums[i], i ]);
        
        let [ max, maxIndex ] = maxHeap.front();
        
        while (Math.abs(maxIndex - i) >= k) {
            maxHeap.dequeue();
            
            [ max, maxIndex ] = maxHeap.front();
        }
        
        const curMax = maxHeap.front()[0];
        res.push(curMax);
    }

    return res;
};