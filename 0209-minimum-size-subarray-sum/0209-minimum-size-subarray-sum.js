/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const N = nums.length;
    let min = Infinity;

    const prefixSum = Array(N).fill(0);
    prefixSum[0] = nums[0];
    for (let i = 1; i < N; i += 1) {
        prefixSum[i] = prefixSum[i-1] + nums[i];
    }

    const isOK = (prefixSum, mid, _left) => {
        return target <= prefixSum[mid] - prefixSum[_left] + nums[_left];
    }

    const binarySearchMin = (prefixSum, target, _left, _right) => {
        let left = _left;
        let right = _right;

        while (left <= right) {
            const mid = Math.floor( (left + right) / 2);
            if (isOK(prefixSum, mid, _left)) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    for (let i = 0; i < N; i += 1) {
        // [ i, j ] min length
        const index = binarySearchMin(prefixSum, target, i, N - 1);
        if (i <= index && index < N) {
            if (index - i + 1 < min) min = index - i + 1;
        }
    }

    return min == Infinity ? 0 : min;
};