/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    const cache = {};
    
    const dfs = (t1, t2, t3) => {
        const key = `${t1}${t2}${t3}`;
        if (t3 >= s3.length) return true;
        if (!(s1[t1] === s3[t3] || s2[t2] === s3[t3])) {
            return false;
        }
        if (cache[key] !== undefined) return cache[key];
        

        return cache[key] = ((s1[t1] === s3[t3]) && dfs(t1+1, t2, t3+1)) ||
                ((s2[t2] === s3[t3]) && dfs(t1, t2+1, t3+1));
    }
    
    return dfs(0, 0, 0);
};