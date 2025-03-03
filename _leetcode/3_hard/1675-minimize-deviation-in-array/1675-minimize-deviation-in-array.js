/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
    const evensMaxHeap = new MaxPriorityQueue({ compare: (a, b) => b - a });
    
    let min = Infinity;
    for (const num of nums) {
        const cur = num % 2 === 0 ? num : num * 2;
        
        evensMaxHeap.enqueue(cur);
        min = Math.min(min, cur);
    }

    let minDeviation = Infinity;
    
    while (true) {
        let max = evensMaxHeap.dequeue();
        const thisDeviation = max - min;
        if (minDeviation > thisDeviation) minDeviation = thisDeviation;
        
        if (max % 2 === 1) {
            return minDeviation;
        } else {
            min = Math.min(min, max / 2);
            evensMaxHeap.enqueue(max / 2);
        }
    }
};