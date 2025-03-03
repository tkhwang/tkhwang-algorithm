/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => b - a });
    
    for (const stone of stones) {
        maxHeap.enqueue(stone);
    }
    
    while (maxHeap.size() > 1) {
        const first = maxHeap.dequeue();
        const second = maxHeap.dequeue();
        
        if(first === second) continue;
        else {
            const diff = first - second;
            maxHeap.enqueue(diff);
        }
    }
    
    return maxHeap.front();
};