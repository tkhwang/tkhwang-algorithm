/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const N = nums.length;
    const res = [] ;
    nums.sort((a,b) => a - b);
    
    const dfs = (cur, index) => {
        res.push([...cur]);
        
        if (index >= N) return;

        for (let i = index; i < N; i += 1) {
             if (i !== index && nums[i - 1] === nums[i]) continue;
            
            cur.push(nums[i]);
            dfs(cur, i + 1);
            cur.pop();
        }
    }
    
    dfs([], 0);
    
    return res;
};