/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    const cache = {};
    
    const dfs = (s1, s2) => {
        let res = false;
        
        const N1 = s1.length;
        const N2 = s2.length;        
        
        if (cache[s1+s2] !== undefined) return cache[s1+s2];
        if (cache[s2+s1] !== undefined) return cache[s2+s1];
        
        if (N1 === 1) return s1 === s2;
        
        for (let i = 0; i < N1 - 1; i += 1) {
            let s1first = s1.slice(0, i + 1);
            let s1second = s1.slice(i+1);
            
            let s2first = s2.slice(0, i + 1);
            let s2second = s2.slice(i + 1);
            
            if (dfs(s1first, s2first) && dfs(s1second, s2second)) {
                res = true;
                break;
            }
            
            s2first = s2.slice(N2 - 1 - i);
            s2second = s2.slice(0, N2 - 1 -i);
            if (dfs(s1first, s2first) && dfs(s1second, s2second)) {
                res = true;
                break;
            }
        }
        cache[s1+s2] = res;
        cache[s2+s1] = res;
        return res;
    }
    
    return dfs(s1, s2)
};