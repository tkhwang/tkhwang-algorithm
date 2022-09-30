/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    const events = {};
    
    const START = 1;
    const END = -1;
    
    for (const [ left, right, height ] of buildings) {
        if (events[left] === undefined) events[left] = [];
        if (events[right] === undefined) events[right] = [];
        events[left].push([ START, height] );
        events[right].push([ END, height ]);
    }
    
    
    const liveHeap = new MaxPriorityQueue({ compare: (a,b) => b - a });
    const pastHeap = new MaxPriorityQueue({ compare: (a,b) => b - a });

    const result = [];
    
    for (const key of Object.keys(events)) {
        for (const [ type, height ] of events[key]) {
            if (type === START) {
                liveHeap.enqueue(height);
            } else if (type === END) {
                pastHeap.enqueue(height);
            }
        }
        
        while (pastHeap.size() && liveHeap.front() === pastHeap.front()) {
            liveHeap.dequeue();
            pastHeap.dequeue();
        }
        
        const highest = liveHeap.front() || 0;

        if (result.length === 0 || highest !== result[result.length - 1][1] ) {
            result.push([ key, highest ]);
        }
    }

    return result;
};