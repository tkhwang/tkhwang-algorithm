/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const N = nums.length;

    const stack = [];
    let result = 0;

    for (const num of nums) {
        while (stack.length && stack.at(-1) > num) stack.pop();

        if (num === 0) continue;

        if (stack.length === 0 || stack.at(-1) < num) {
            result += 1;
            stack.push(num);
        }
    }
    return result;
};