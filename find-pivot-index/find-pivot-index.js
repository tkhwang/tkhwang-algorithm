/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const N = nums.length;

    const sumLeft = Array(N).fill(0);
    const sumRight = Array(N).fill(0);
    
    let sum = 0;
    for (let i = 0; i < N; i += 1) {
        sumLeft[i] = sum;
        sum += nums[i];
    }
    sum = 0;
    for (let i = N - 1; i >= 0; i -= 1) {
        sumRight[i] = sum;
        sum += nums[i];
    }
    
    for (let i = 0; i < N; i += 1) {
        if (sumLeft[i] === sumRight[i]) return i;
    }
    
    return -1;
};