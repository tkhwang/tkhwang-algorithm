/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const N = nums.length;
    
    const res = [];
    
    const backtrack = (first) => {
        if (first >= N) {
            res.push([...nums]);
            return;
        }
        
        for (let i = first; i < N; i += 1) {
            [ nums[first], nums[i] ] = [ nums[i], nums[first] ];
            
            backtrack(first + 1);
            
            [ nums[first], nums[i] ] = [ nums[i], nums[first] ];
        }
    }
    
    backtrack(0);
    
    return res;
};