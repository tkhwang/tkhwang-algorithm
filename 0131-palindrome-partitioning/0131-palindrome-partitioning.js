/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const N = s.length;
    
    const isP = (array) => {
        let left = 0;
        let right = array.length - 1;
        
        while (left <= right) {
            if (array[left] !== array[right]) return false;
            left += 1;
            right -= 1;
        }
        return true;
    }
    
    const res = [];
    
    const dfs = (cur, index) => {
        if (index >= N) {
            res.push([...cur]);
            return;
        }
        
        for (let i = index; i < N; i += 1) {
            const word = s.slice(index, i + 1);
            if (isP(word)) {
                cur.push(word);
                dfs(cur, i + 1);
                cur.pop();
            }
        }
    }
    
    dfs([], 0);
    
    return res;
};