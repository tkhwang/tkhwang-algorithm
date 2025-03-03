/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const obj = {};
    for (const task of tasks) {
        obj[task] = (obj[task] || 0) + 1;
    }
    
    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => b[1] - a[1] });
    
    for (const task in obj) {
        maxHeap.enqueue([ task, obj[task] ]);
    }
    
    let times = 0;
    while (maxHeap.size() > 0) {
        const check = maxHeap.front();

        if (check[1] === 1) return -1;
        else if (check[1] === 2 || check[1] === 4) {
            let [ task, count ] = maxHeap.dequeue();
            count -= 2;
            if (count > 0) maxHeap.enqueue([ task, count ]);
        }
        else {
            let [ task, count ] = maxHeap.dequeue();
            count -= 3;
            if (count > 0) maxHeap.enqueue([ task, count ]);
        }
        
        times += 1;
    }
    
    return times;
};