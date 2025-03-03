/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
    const N = nums.length;
    const stack = [];
    const len = k;
    for (const [ i, num ] of nums.entries()) {
        while (stack.length && stack.at(-1) > num && stack.length - 1 + N - i >= k) {
            stack.pop();
        }
        if (stack.length < k) stack.push(num);
    }
    return stack;
};