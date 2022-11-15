/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minimumOperations = function(root) {
    const queue = [ root ]
    
    let count = 0;
    
    while (queue.length) {
        const len = queue.length;
        
        const level = [];
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
            
            level.push(cur.val);
            
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        
        count += minSwaps(level);
    }
    
    return count;
};
    
const minSwaps = (array) => {
    const N = array.length;
    if (N === 1) return 0;

    // [ value, index ]
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[0] - b[0] });

    for (const [ i, num ] of array.entries()) {
        minHeap.enqueue([ num, i ]);
    }

    let i = 0;
    let count = 0;
    
    while (i < N) {
        while (minHeap.front()[0] !== array[minHeap.front()[1]]) {
            minHeap.dequeue();
        }
        
        const [ min, minIndex ] = minHeap.dequeue();

        if (min !== array[i]) {
            minHeap.enqueue([ array[i], minIndex ]);
            [ array[i], array[minIndex] ] = [ array[minIndex], array[i] ];
            
            count += 1;
        }
        i += 1;
    }
    
    return count;
}