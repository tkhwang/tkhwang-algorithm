/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const N = nums.length;
    
    const sumFromLeft = Array(N).fill(0);
    const sumFromRight = Array(N).fill(0);
    
    let sum = 0;
    for (let i = 0; i < N; i += 1) {
        sum += nums[i];
        sumFromLeft[i] = sum;
    }
    
    sum = 0;
    for (let i = N - 1; i >= 0; i -= 1) {
        sum += nums[i];
        sumFromRight[i] = sum;
    }
    
    for (let i = 0; i < N; i += 1) {
        if (sumFromLeft[i] === sumFromRight[i]) return i;
    }
    return -1;
};