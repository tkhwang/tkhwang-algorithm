/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    const N = nums.length;
    
    if (2 *k + 1 > N) return nums.map((v) => -1);
    
    const res = Array(N).fill(-1);
    
    let sum = 0;
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        sum += cur;
        
        while (right - left + 1 > 2 * k + 1) {
            const leftNum = nums[left];
            sum -= leftNum;
            left += 1;
        }
        
        if (right - left + 1 === 2 * k + 1) {
            const index = left + k;
            res[index] = Math.floor(sum / (2 * k + 1));
        }
    }
    return res;
};