/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function(nums) {
    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => b - a });
    for (const num of nums) {
        maxHeap.enqueue(num)
    }
    
    const sum = nums.reduce((a,b) => a + b, 0);
    
    let curSum = sum / 2;
    let count = 0;
    
    while (curSum > 0) {
        const max = maxHeap.dequeue();
        curSum -= max/2;
        maxHeap.enqueue(max/2);
        count += 1;
    }
    
    return count;
};