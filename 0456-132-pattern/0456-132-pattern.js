/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    const N = nums.length;
    
    const stack = [];
    
    let min = Infinity;
    for (const [ i, num ] of nums.entries()) {
        while (stack.length && stack.at(-1)[0] <= num) {
            stack.pop();
        }
        if (stack.length && stack.at(-1)[1] < num) return true;
        stack.push([ num, min ]);
        min = Math.min(min, num);
    }
    return false;
};