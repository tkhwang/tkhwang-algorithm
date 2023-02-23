/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const N = profits.length;
    
    const projects = Array(N).fill(null).map((v,i) => ([ i, profits[i] ]));
    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => b[1] - a[1] || capital[a[0]] - capital[a[0]] });

    for (let i = 0; i < N; i += 1) {
        maxHeap.enqueue(projects[i])
    }
    
    const set = new Set();
    
    while (maxHeap.size() > 0 && k > 0) {
        const waiting = [];
        while (maxHeap.size() > 0 && w < capital[maxHeap.front()[0]]) {
            waiting.push(maxHeap.dequeue());
        }
        
        if (maxHeap.size() === 0) break;
        
        const [ i ] = maxHeap.dequeue()
        w += profits[i];
        k -= 1;
        while (waiting.length > 0) {
            maxHeap.enqueue(waiting.pop());
        }
    }
    
    return w;
};