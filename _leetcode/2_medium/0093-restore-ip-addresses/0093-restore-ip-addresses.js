/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const N = s.length;
    
//     const isValid = (array) => {
//         const arr = array.split(".");
//         if (arr.length !== 4) return false;
        
//         return arr.every((v) => v !== undefined && (0 <= v && v <= 255));
//     }
    
    const isValid = (array) => {
        const regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;
        
        return regex.test(array);
    }
    const res = [];
    const set = new Set();
    
    const dfs = (cur, index) => {
        if (index >= N) {
            if (isValid(cur)) {
                if (!set.has(cur)) {
                    set.add(cur);
                    res.push(cur);
                }
            }
            return;
        }

        dfs(cur + s[index], index + 1);
        dfs(cur + s[index] + ".", index + 1);        
    }
    
    dfs("", 0);
    
    return res;
};