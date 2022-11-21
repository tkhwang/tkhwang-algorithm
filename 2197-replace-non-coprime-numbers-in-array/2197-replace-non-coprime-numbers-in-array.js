/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function(nums) {
    const N = nums.length;
    
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);

    const stack = [];
    
    for (let num of nums) {
        while (stack.length && gcd(stack.at(-1), num) > 1) {
            num = lcm(stack.at(-1), num);
            stack.pop();
        }
        stack.push(num)
    }
    
    return stack;
};