/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const N = nums.length;

    const result = [];

    for (let i = 0; i < N; i += 1) {
        let count = 0;

        for (let j = 0; j < N; j += 1) {
            if (i === j) continue;

            if (nums[i] > nums[j]) count += 1;
        }    

        result.push(count);
    }

    return result;
};