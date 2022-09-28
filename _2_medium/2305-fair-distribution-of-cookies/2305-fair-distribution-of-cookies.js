/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    const n = cookies.length;
    const children = Array(k).fill(0);
    let min = Infinity;
    
    const dfs = (num) => {
        if (num >= n) {
            const max = Math.max(...children);
            min = Math.min(min, max);
            return;
        }
        
        for (let i = 0; i < k; i += 1) {
            children[i] += cookies[num];
            
            dfs(num + 1);
            
            children[i] -= cookies[num];
        }
    }
    
    dfs(0);
    
    return min;
};