/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const N = nums.length;
    
    const queue = new Queue();
    let sum = 0;
    let left = 0;
    let min = Infinity;
    
    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        queue.push(cur);
        sum += cur;
        if (sum < target) continue;
        
        while (sum >= target) {
            if (min > right - left + 1) min = right - left + 1;
            
            const leftNum = nums[left];
            sum -= leftNum;
            left += 1;
        }
    }
    return min === Infinity ? 0 : min;
};