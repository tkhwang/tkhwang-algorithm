/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const N = arr.length;
    const MOD = 7 + 10 ** 9;

    const stack = [];
    let sum = 0;
    
    for (let i = 0; i <= N; i += 1) {
        while (stack.length && (i === N || arr[stack.at(-1)] >= arr[i])) {
            const mid = stack.pop();
            const left = stack.length ? stack.at(-1) : -1;
            
            sum += arr[mid] * (i - mid) * (mid - left) % MOD;
        }
        stack.push(i)
    }

    return sum % MOD;
};