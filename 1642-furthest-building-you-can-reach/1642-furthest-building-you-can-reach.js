/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const n = heights.length;
    const mpq = new MaxPriorityQueue({ compare: (a,b) => b - a });
    
    for (let i = 1; i < n; i += 1) {
        const prv = heights[i-1];
        const cur = heights[i];
        
        const diff = cur - prv;
        
        if (diff <= 0) continue;
        
        mpq.enqueue(diff);
        bricks -= diff;
        
        if (ladders === 0 && bricks < 0) return i - 1;
        
        if (bricks < 0) {
            bricks += mpq.dequeue();
            ladders -= 1;
        }
    }    
    
    return n - 1;
};