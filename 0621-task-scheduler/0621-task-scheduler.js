/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const freq = {};
    for (const task of tasks) {
        freq[task] = (freq[task] || 0) + 1;
    }
    
    console.log(freq);
    
    const mpq = new MaxPriorityQueue({ compare: (a,b) => b - a });
    
    for (const key in freq) {
        mpq.enqueue(freq[key])
    }
    
    let time = 0;
    
    const queue = [];
    
    while (mpq.size() || queue.length) {
        time += 1;
        
        if (mpq.size() === 0) {
            time = queue[0][1];
        } else {
            let cnt = mpq.dequeue() - 1;
            if (cnt) {
                queue.push([ cnt, time + n ]);
            }
        }
        if (queue.length && queue[0][1] === time) {
            mpq.enqueue([ queue.shift()[0] ])
        }
    }
    
    return time;
};