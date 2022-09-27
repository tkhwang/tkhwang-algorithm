/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const mpq = new MaxPriorityQueue({ compare: (a,b) => b - a });
    
    for (const stone of stones) {
        mpq.enqueue(stone)
    }
    
    while (mpq.size() > 1) {
        const first = mpq.dequeue();
        const second = mpq.dequeue();
        
        if (first !== second) mpq.enqueue(first - second);
    }
    
    return mpq.front();
};