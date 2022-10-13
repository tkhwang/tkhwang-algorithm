/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    
    const dfs = (cur, left, right) => {
        if (left < 0 || right < 0) return ;
        
        if (left === 0 && right === 0) {
            res.push(cur);
            return;
        }
        
        if (left > right) return;
        
        dfs(cur + "(", left - 1, right);
        dfs(cur + ")", left, right - 1);
    }
    
    dfs("", n, n);
    
    return res;
};