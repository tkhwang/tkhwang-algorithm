/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const N = arr.length;
    const MOD = 7 + 10 ** 9;

    const minRight = Array(N).fill(N);
    const minLeft  = Array(N).fill(-1);
    
    const stack = [ ];
    for (let i = 0; i <= N; i += 1) {
        while (stack.length && arr[stack.at(-1)] >= arr[i]) {
            const pop = stack.pop();
            minRight[pop] = i;
        }
        stack.push(i)
    }
    
    stack.length = 0;
    for (let i = N - 1; i >= 0; i -= 1) {
        while (stack.length && arr[stack.at(-1)] > arr[i]) {
            const pop = stack.pop();
            minLeft[pop] = i;
        }
        stack.push(i)
    }

    console.log(minLeft);
    console.log(minRight);
    
    let sum = 0;
    
    for (let i = 0; i < N; i += 1) {
        const left = i - minLeft[i];
        const right = minRight[i] -i;
        
        console.log(left, i, right)
        
        sum += (arr[i] * left * right ) % MOD;
    }
    
    return sum % MOD;
};