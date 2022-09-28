/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const n = nums.length;
    const res = [];
    
    const backtrack = (cur, used) => {
        if (cur.length >= n) {
            res.push([...cur]);
            return;
        }
        
        for (let i = 0; i < n; i += 1) {
            if (used.includes(i)) continue;
            
            used.push(i);
            cur.push(nums[i]);
            
            backtrack(cur, used);
            
            used.pop();
            cur.pop();
        }
    }
    
    backtrack([], []);
    
    return res;
};