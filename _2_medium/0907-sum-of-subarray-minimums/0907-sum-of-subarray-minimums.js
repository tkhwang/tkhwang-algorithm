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
        while (stack.length > 0 && (i === N) || (arr[stack[stack.length - 1]] >= arr[i])) {
            const mid = stack.pop();
            const left = stack.length > 0 ? stack[stack.length - 1] : -1;
            const right = i;
            
            const count = ((mid - left) * (right - mid)) % MOD;
            sum += (count * arr[mid]) % MOD;
            sum %= MOD;
        }
        stack.push(i);
    }
    return sum;
};