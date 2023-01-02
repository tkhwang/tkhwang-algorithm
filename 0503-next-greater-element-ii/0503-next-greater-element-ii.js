/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const N = nums.length;
    const total = [ ...nums, ...nums ];
    
    const stack = [];
    const res = Array(N).fill(-1);
    
    for (const [ i, num ] of total.entries()) {
        while (stack.length && total[stack.at(-1)] < num) {
            const pop = stack.pop();
            res[pop] = num;
        }
        stack.push(i)
    }
    
    return res.slice(0, N);
};