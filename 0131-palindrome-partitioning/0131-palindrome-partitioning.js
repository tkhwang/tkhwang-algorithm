/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const N = s.length;
    const res = [];
    
    const isPlindrome = (str) => {
        let left = 0;
        let right = str.length - 1;
        
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left += 1;
            right -= 1;
        }
        return true;
    }
    
    const dfs = (cur, index) => {
        if (index >= N) {
            res.push([...cur]);
            return;
        }    
        
        for (let i = index; i < N; i += 1) {
            const candidate = s.slice(index, i + 1);
            if (isPlindrome(candidate)) {
                cur.push(candidate);
                dfs(cur, i + 1);
                cur.pop()
            }
        }
    }
    
    dfs([], 0);
    
    return res;
};