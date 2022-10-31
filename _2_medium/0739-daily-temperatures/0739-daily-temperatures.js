/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const N = temperatures.length;
    const stack = [];
    const res = Array(N).fill(0);
    
    for (const [ i, temperature ] of temperatures.entries()) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperature) {
            const prv = stack.pop();
            res[prv] = i - prv;
        }
        stack.push(i)
    }
    return res;
};