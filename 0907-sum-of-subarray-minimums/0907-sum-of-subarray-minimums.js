/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const N = arr.length;
    const MOD = 7 + 10 ** 9;

    const stack = [];
    let sum = 0;
    
    for (let right = 0; right <= N; right += 1) {
        while (stack.length && (right === N || arr[stack.at(-1)] >= arr[right])) {
            const mid = stack.pop();
            const left = stack.length ? stack.at(-1) : -1;
            
            sum += arr[mid] * (right - mid) * (mid - left) % MOD;
        }
        stack.push(right)
    }

    return sum % MOD;
};