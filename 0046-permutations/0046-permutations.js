/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const N = nums.length;
    const res = [];
    
    const dfs = (index) => {
        if (index >= N) {
            res.push([...nums]);
            return;
        }
        
        for (let i = index; i < N; i += 1) {
            [ nums[index], nums[i] ] = [ nums[i], nums[index] ];
            dfs(index + 1);
            [ nums[index], nums[i] ] = [ nums[i], nums[index] ];
        }
    }
    
    dfs(0);
    
    return res;
};