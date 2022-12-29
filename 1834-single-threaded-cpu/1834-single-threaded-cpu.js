/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(_tasks) {
    const N = _tasks.length;
    const tasks = _tasks.map((v,i) => [i, ...v]).sort((a,b) => a[1] - b[1] || a[0] - b[0]);
    
    let time = tasks.at(0)[1]
    
    // [ processTime, task ];
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[1] - b[1] || a[0] - b[0] });
    
    const res = [];
    
    while (tasks.length > 0 || minHeap.size() > 0) {
        while (tasks.length && tasks.at(0)[1] <= time) {
            const [ task, , processTime ] = tasks.shift();
            minHeap.enqueue([ task, processTime ]);
        }

        if (minHeap.size() > 0)  {
            const [ task, processTime ] = minHeap.dequeue();
            res.push(task);
            time += processTime;
        } else {
            time += (tasks.at(0)[1] - time);
        }
    }
    
    return res;
};