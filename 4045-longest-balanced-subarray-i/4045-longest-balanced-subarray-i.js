/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    const N = nums.length;

    let max = 0;

    for(let left = 0; left < N; left += 1) {
        const setOdd = new Set();
        const setEven = new Set();
        for (let right = left; right < N; right += 1) {
            const cur = nums[right];
            if (cur % 2 === 0) setEven.add(cur);
            else setOdd.add(cur);

            if (setEven.size === setOdd.size) {
                if (max < right - left + 1) max = right - left + 1;
            }
        }
    }

    return max;
};