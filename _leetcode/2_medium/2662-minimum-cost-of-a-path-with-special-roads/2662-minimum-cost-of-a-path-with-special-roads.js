/**
 * @param {number[]} start
 * @param {number[]} target
 * @param {number[][]} specialRoads
 * @return {number}
 */
var minimumCost = function(start, target, specialRoads) {
    const dist = (one, two) => {
        return Math.abs(two[0] - one[0]) + Math.abs(two[1] - one[1]);
    }
    
    const genKey = (x, y) => `${x}:${y}`;
    const cache = {};
    
    // [ x, y, cost ]
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[2] - b[2] });
    minHeap.enqueue([ start[0], start[1], 0 ]);
    
    while (minHeap.size()) {
        let [ x, y, cost ] = minHeap.dequeue();
        
        cache[genKey(x,y)] = cost;
        if (x === target[0] && y === target[1]) return cost;
        
        // cur -> target
        if (cache[genKey(target[0],target[1])] === undefined) cache[genKey(target[0], target[1])] = Infinity;
        if (cache[genKey(target[0],target[1])] > cost + dist([x,y], target)) {
            cache[genKey(target[0],target[1])] = cost + dist([x,y], target)
            minHeap.enqueue([ target[0], target[1], cost + dist([x,y], target)]);
        }
        
        for (const [ x1, y1, x2, y2, specialCost ] of specialRoads) {
            // cur -> 1 -> 2
            if (cache[genKey(x2,y2)] === undefined) cache[genKey(x2,y2)] = Infinity;
            if (cache[genKey(x2,y2)] > cost + dist([x,y], [x1,y1]) + specialCost) {
                cache[genKey(x2,y2)] = cost + dist([x,y], [x1,y1]) + specialCost;
                minHeap.enqueue([ x2, y2, cost + dist([x,y], [x1,y1]) + specialCost ])
            }
            // cur -> 2 -> 1
            // if (cache[genKey(x1,y1)] === undefined) cache[genKey(x1,y1)] = Infinity;
            // if (cache[genKey(x1,y1)] > cost + dist([x,y], [x2,y2]) + specialCost) {
            //     minHeap.enqueue([ x1,y1, cost + dist([x,y], [x2,y2]) + specialCost ])
            // }
        }
    }
    
    return -1;
};