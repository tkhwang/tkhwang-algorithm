/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => b[1] - a[1] });
    
    for (const [ i, pile ] of piles.entries()) {
        maxHeap.enqueue([ i, pile ])
    }
    
    while (k > 0 && maxHeap.size() > 0) {
        const [ maxIndex, max ] = maxHeap.dequeue();
        maxHeap.enqueue([maxIndex, max - Math.floor(max / 2) ]);
        
        k -= 1;
    }
    
    let sum = 0;
    while (maxHeap.size()) {
        const [ index, max ] = maxHeap.dequeue();
        sum += max;
    }
    return sum;
};