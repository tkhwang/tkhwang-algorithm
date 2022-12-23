/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a - b });
    
    for (const stick of sticks) {
        minHeap.enqueue(stick);
    }
    
    let sum = 0;
    while (minHeap.size() > 1) {
        const one = minHeap.dequeue();
        const two = minHeap.dequeue();
        
        sum += one + two;
        
        minHeap.enqueue(one + two);
    }
    
    return sum;
};