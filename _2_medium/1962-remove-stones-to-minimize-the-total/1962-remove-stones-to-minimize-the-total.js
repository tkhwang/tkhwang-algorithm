/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    const N = piles.length;

    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => b - a });

    for (const pile of piles) {
        maxHeap.enqueue(pile);
    }
    
    while (k > 0) {
        const max = maxHeap.dequeue();
        maxHeap.enqueue(max - Math.floor(max / 2));
        k -= 1
    }

    return maxHeap.toArray().reduce((a,b) => a + b, 0);
};