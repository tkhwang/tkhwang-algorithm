/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    
    const dfs = (cur, left, right) => {
        if (left >= n && right >= n) {
            res.push(cur);
            return;
        }
        
        if (left < n) dfs(cur + "(", left + 1, right);
        if (right < left) dfs(cur + ")", left, right + 1);
    }
    
    dfs("", 0, 0);
    
    return res;
};