/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => b - a });
    
    for (const n of [ a, b, c ]) {
        maxHeap.enqueue(n);
    }
    
    let res = 0;
    while (maxHeap.size() > 1) {
        let one = maxHeap.dequeue();
        let two = maxHeap.dequeue();
        
        one -= 1;
        two -= 1;
        
        if (one > 0) maxHeap.enqueue(one);
        if (two > 0) maxHeap.enqueue(two);
        
        res += 1;
    }
    
    return res;
};