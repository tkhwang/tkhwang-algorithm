/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const N = temperatures.length;
    
    const stack = [];
    const res = Array(N).fill(0);
    
    for (let i = 0; i < N; i += 1) {
        const cur = temperatures[i];
        
        while (stack.length && temperatures[stack.at(-1)] < cur) {
            const pop = stack.pop();
            res[pop] = i - pop;
            
        }
        stack.push(i)
    }
    return res;
};