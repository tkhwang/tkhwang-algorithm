/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const N = nums.length;
    const res = [];
    const set = new Set();
    const genKey = (arr) => arr.join(":");
    
    const dfs = (cur, index) => {
        const key = genKey(cur);
        
        if (cur.length >= 2) {
            if (!set.has(key)) {
                set.add(key);
                res.push([...cur]);
            }
        }
        
        if (index >= N) return;
   
        const current = nums[index];
        
        if (cur.length === 0 || (cur.length > 0 && cur.at(-1) <= current)) {
            cur.push(current);
            dfs(cur, index + 1);
            cur.pop();
        }
        
        dfs(cur, index + 1);
    }
    
    dfs([], 0);
    
    return res;
};