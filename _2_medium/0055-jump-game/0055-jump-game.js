/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const N = nums.length;

    let arrived = N - 1;
    
    for (let i = N - 2; i >= 0; i -= 1) {
        if (i + nums[i] >= arrived) {
            arrived = i;
        }
    }
    
    return arrived === 0;
};