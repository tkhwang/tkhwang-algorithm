/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const N = nums.length;
    let ones = 1;

    let max = 0;
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        if (cur === 0) ones -= 1;
        while (ones < 0) {
            const leftCh = nums[left];
            if (leftCh === 0) ones += 1;
            left += 1;
        }
        if (max < right - left + 1) max = right - left + 1;
    }
    return max;
};