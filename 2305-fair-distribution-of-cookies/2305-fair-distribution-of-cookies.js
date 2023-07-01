/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    const N = cookies.length;
    
    const cur = new Array(k).fill(0);
    let minUnfairness = Infinity;

    const dfs = (i, count) => {
        if(N - i < count) return

        if(i === N){
            const maxCookies = Math.max(...cur)
            minUnfairness = Math.min(minUnfairness, maxCookies)
            return
        }
        
        for(let j = 0; j< k; j++){
            count -= cur[j] === 0 ? 1 : 0
            cur[j] += cookies[i]
            
            dfs(i+1, count)
            
            cur[j] -= cookies[i]
            count += cur[j] === 0 ? 1 : 0
        }
    }
    
    dfs(0, k)
    
    return minUnfairness
};