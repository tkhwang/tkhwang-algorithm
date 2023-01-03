/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hands, groupSize) {
    const obj = {};
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a - b });

    const decrement = (key, obj) => {
        obj[key] -= 1;
        if (obj[key] === 0) delete obj[key];
    }
    
    for (const hand of hands) {
        obj[hand] = (obj[hand] || 0) + 1;
        minHeap.enqueue(hand);
    }

    while (Object.keys(obj).length > 0) {
        while (!(obj[minHeap.front()] > 0)) {
            minHeap.dequeue();
        }
        
        let min = minHeap.dequeue();
        decrement(min, obj);
        let size = groupSize - 1;
        
        while (size > 0) {
            if (!(obj[min + 1] > 0)) return false;
            
            min += 1;
            decrement(min, obj);
            size -= 1;
        }
    }
    
    return true;
};