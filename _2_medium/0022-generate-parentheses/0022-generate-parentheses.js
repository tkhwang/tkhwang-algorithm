/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    
    const dfs = (cur, left, right) => {
        if (left === 0 && right === 0) {
            res.push(cur);
            return;
        }    
        
        if (left > 0) dfs(cur + "(", left - 1, right);
        if (left < right) dfs(cur + ")", left, right - 1);
    }
    
    dfs("", n, n);
    
    return res;
};