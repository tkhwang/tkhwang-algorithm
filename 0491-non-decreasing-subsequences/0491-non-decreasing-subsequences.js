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
        
        if (cur.length === 0) {
            for (let i = index; i < N; i += 1) {
                const current = nums[i];
                
                cur.push(current);
                dfs(cur, i + 1);
                cur.pop();
            }
        } else {
            const last = cur.at(-1);

            for (let i = index; i < N; i += 1) {
                const current = nums[i];
                
                if (last > current) continue;
                
                cur.push(current);
                dfs(cur, i + 1);
                cur.pop();
            }
        }
    }
    
    dfs([], 0);
    
    return res;
};