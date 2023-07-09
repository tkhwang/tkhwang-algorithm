/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function(nums, k) {
    const N = nums.length;

    while (true) {

        while (nums.length && nums.at(-1) === 0) nums.pop();
        
        if (nums.length === 0) return true;

        if (nums.length < k) return false;
        
        if (nums.at(-1) < 0) return false;
        
        const last = nums.at(-1);
        for (let i = 0; i < k; i += 1) {
            nums[nums.length - 1 - i] -= last;
        }
    }
};