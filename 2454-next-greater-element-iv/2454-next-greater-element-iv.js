/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function(nums) {
    const N = nums.length;

    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => a[0] - b[0] });
    
    const stack = [];
    const first = Array(N).fill(null).map((_) => []);
    const res = Array(N).fill(-1);

    for (const [ i, num ] of nums.entries()) {
        while (stack.length && nums[stack[stack.length - 1]] < num) first[i].push(stack.pop());
        stack.push(i);
    }

    for (let i = 0; i < N; i += 1) {
        while (maxHeap.size() > 0 && maxHeap.front()[0] < nums[i]) {
            const [ _, k ] = maxHeap.dequeue();
            res[k] = nums[i];
        }
        for (const j of first[i]) {
            maxHeap.enqueue([ nums[j], j ])
        }
    }
    
    return res;
};