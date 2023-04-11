/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const N = nums.length;
    
    const dfs = (left, right, turn) => {
        if (left == right) {
            return turn * nums[left];
        }
        
        const a = turn * nums[left] + dfs(left + 1, right, -turn);
        const b = turn * nums[right] + dfs(left, right - 1, -turn);
        
        return turn * Math.max(turn * a, turn * b);
    }
    
    return dfs(0, N-1, 1) >= 0;
};