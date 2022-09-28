/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const n = nums.length;
    const res = [];
    
    const backtrack = (cur) => {
        if (cur.length >= n) {
            res.push([...cur]);
            return;
        }
        
        for (let i = 0; i < n; i += 1) {
            if (cur.includes(nums[i])) continue;
            
            cur.push(nums[i]);
            
            backtrack(cur);
            
            cur.pop();
        }
    }
    
    backtrack([]);
    
    return res;
};