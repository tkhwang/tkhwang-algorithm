/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(_tasks) {
    const N = _tasks.length;
    const tasks = _tasks.map((v,i) => [i, ...v]).sort((a,b) => a[1] - b[1] || a[0] - b[0]);
    
    let i = 0;
    let time = tasks.at(i)[1]
    
    // [ processTime, task ];
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[1] - b[1] || a[0] - b[0] });
    
    const res = [];
    
    while (res.length < N) {
        while (i < N && tasks.at(i)[1] <= time) {
            const [ task, , processTime ] = tasks[i];
            i += 1;
            minHeap.enqueue([ task, processTime ]);
        }

        if (minHeap.size() > 0)  {
            const [ task, processTime ] = minHeap.dequeue();
            res.push(task);
            time += processTime;
        } else {
            time = tasks.at(i)[1];
        }
    }
    
    return res;
};