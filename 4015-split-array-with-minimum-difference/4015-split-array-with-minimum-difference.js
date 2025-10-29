/**
 * @param {number[]} nums
 * @return {number}
 */
var splitArray = function(nums) {
    const N = nums.length;

    const isIncreasing = new Array(N).fill(false);
    isIncreasing[0] = true;
    for (let i = 1; i < N; i += 1) {
        isIncreasing[i] = isIncreasing[i-1] && (nums[i-1] < nums[i]);
    }

    // isDecreasing[i] = true if nums[i...n-1] is strictly decreasing
    const isDecreasing = new Array(N).fill(false);
    isDecreasing[N-1] = true;
    for (let i = N - 2; i >= 0; i -= 1) {
        isDecreasing[i] = isDecreasing[i+1] && (nums[i] > nums[i+1]);
    }

    const prefixSum = Array(N).fill(0);
    prefixSum[0] = nums[0];
    for (let i = 1; i < N; i += 1) {
        prefixSum[i] = prefixSum[i-1] + nums[i];
    }

    let min = Infinity;

    for (let i = 0; i < N - 1; i += 1) {
        // [0...i]
        // [i+1...N-1]
        if (isIncreasing[i] && isDecreasing[i+1]) {
            const left = prefixSum[i];
            const right = prefixSum[N-1] - prefixSum[i+1] + nums[i+1];
            const diff = Math.abs(right - left);
            if (diff < min) min = diff;
        }
    }

    return min === Infinity ? -1 : min;
};