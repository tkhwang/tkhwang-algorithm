/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    
    const backtrack = (cur, index) => {
        if (cur.length === k) {
            result.push([...cur]);
            return;
        }
        
        for (let i = index; i <= n; i += 1) {
            cur.push(i);
            
            backtrack(cur, i + 1);
            
            cur.pop();
        }
        
    }
    
    backtrack([], 1);
    
    return result;
};