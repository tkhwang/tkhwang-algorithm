/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const n = nums.length;
    const result = [];
    
    const backtrack = (cur, index) => {
        if (cur.length > n) return;
        
        result.push([...cur]);
        
        for (let i = index; i < n; i += 1) {
            cur.push(nums[i]);
            
            backtrack(cur, i + 1);
            
            cur.pop();
        }
    }
    
    backtrack([], 0);
    
    return result;
};