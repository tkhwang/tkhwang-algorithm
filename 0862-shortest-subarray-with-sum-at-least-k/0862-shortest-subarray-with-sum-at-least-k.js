/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const N = nums.length;
    
    const array = [ 0 ]
    for (const num of nums) {
        array.push(num + array.at(-1));
    }
    
    const queue = [];
    let res = Infinity;
    
    for (const [ i, num ] of array.entries()) {
        if (queue.length === 0) {
            queue.push(i);
        } else {
            while (queue.length && array[queue.at(-1)] > num) queue.pop();
            while (queue.length && array[queue.at(0)] <= num - k) {
                res = Math.min(res, i - queue.at(0));
                queue.shift();
            }
            queue.push(i);
        }
    }
    
    return res === Infinity ? -1 : res;
};