/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const N = temperatures.length;

    const result = Array(N).fill(0);
    const stack = [];

    for (const [ index, temperature] of temperatures.entries()) {
        while (stack.length && stack.at(-1)[1] < temperature) {
            const [ lastIndex, lastTemp ] = stack.pop();
            result[lastIndex] = index - lastIndex;
        }
        stack.push([ index, temperature ])
    }
    return result;
};