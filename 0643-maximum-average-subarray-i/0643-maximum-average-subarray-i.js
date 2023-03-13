/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const N = nums.length;
    const queue = new Queue();
    let sum = 0;
    let max = -Infinity;
    
    for (const num of nums) {
        queue.enqueue(num);
        sum += num;
        if (queue.size() < k) continue;
        if (queue.size() > k) {
            const oldest = queue.dequeue();
            sum -= oldest;
        }
        if (queue.size() === k) {
            const avg = sum / k;
            if (max < avg) max = avg;
        }
    }
    
    return max;
};