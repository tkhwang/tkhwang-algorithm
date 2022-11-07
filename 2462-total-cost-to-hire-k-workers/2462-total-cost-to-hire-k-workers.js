/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    const N = costs.length;
    
    const leftMinHeap = new MinPriorityQueue({ compare: (a,b) => a[0] - b[0] || a[1] - b[1] });
    const rightMinHeap = new MinPriorityQueue({ compare: (a,b) => a[0] - b[0] || a[1] - b[1] });

    let left = 0;
    while (leftMinHeap.size() < candidates && left < N) {
        leftMinHeap.enqueue([ costs[left], left ]);
        left += 1;
    }
    
    let right = N - 1;
    while (rightMinHeap.size() < candidates && left <= right) {
        rightMinHeap.enqueue([ costs[right], right ]);
        right -= 1;
    }

    let cost = 0;
    
    while (k > 0) {
        const leftMin = leftMinHeap.front();
        const rightMin = rightMinHeap.front();
        
        if (rightMin == null || (leftMin != null && leftMin[0] <= rightMin[0])) {
            cost += leftMin[0];
            leftMinHeap.dequeue();
            
            if (left <= right) {
                leftMinHeap.enqueue([ costs[left], left ]);
                left += 1;
            }
        } else {
            cost += rightMin[0];
            rightMinHeap.dequeue();
            
            if (left <= right) {
                rightMinHeap.enqueue([ costs[right], right ]);
                right -= 1;
            }
        }
        
        k -= 1;
    }
    
    return cost;
};