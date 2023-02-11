/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const N = nums.length;
    
    const total = [ ...nums, ...nums];
    const res = Array(N).fill(-1);
    const stack = [];
    
    for (let i = 0; i < 2 * N; i += 1) {
        while (stack.length && total[stack.at(-1)] < total[i]) {
            const pop = stack.pop();
            res[pop] = total[i];
        }
        stack.push(i)    
    }
    
    return res.slice(0, N);
};