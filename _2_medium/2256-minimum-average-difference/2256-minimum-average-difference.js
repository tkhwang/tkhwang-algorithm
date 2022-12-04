/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    const N = nums.length;
    
    const prefixSumRight = Array(N+1).fill(0);
    const prefixSumLeft  = Array(N+1).fill(0);
    
    let sum = 0;
    for (let i = N - 1; i >= 0; i -= 1) {
        sum += nums[i];
        prefixSumRight[i] = sum
    }
    
    sum = 0;
    for (let i = 0; i <= N; i += 1) {
        prefixSumLeft[i] = sum;
        sum += nums[i];
    }
    
    let min = Infinity;
    let minIndex;
    
    for (let i = 0; i < N; i += 1) {
        let left = Math.floor(prefixSumLeft[i+1]/(i+1));
        let right = i === N - 1 ? 0 :
                      Math.floor(prefixSumRight[i+1] / (N - i - 1));

        const local = Math.abs(left - right);

        if (min > local) {
            min = local;
            minIndex = i;
        }
    }
    
    return minIndex;
};