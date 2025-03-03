/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const N = nums.length;
    const result = [];
    
    const backtrack = (cur, index) => {
        if (cur.length > N) return;
        
        result.push([...cur]);
        
        for (let i = index; i < N; i += 1) {
            cur.push(nums[i]);
            
            backtrack(cur, i + 1);
            
            cur.pop();
        }
    }
    
    backtrack([], 0);
    
    return result;    
};