/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const N = arr.length;
    let max = -Infinity;
    
    const dfs = (index, cur, set) => {
        if (index >= N) {
            if (max < cur.length) max = cur.length;
            return;
        }
        
        // not add
        dfs(index + 1, cur, set);
        
        // add
        const localSet = new Set();
        for (const ch of arr[index]) {
            if (localSet.has(ch)) return;
            localSet.add(ch);
        }
        for (const ch of arr[index]) {
            if (set.has(ch)) return;
        }
        
        for (const ch of arr[index]) {
            set.add(ch);
        }
        dfs(index + 1, cur + arr[index], set);
        
        for (const ch of arr[index]) {
            set.delete(ch);
        }        
    }
    
    dfs(0, "", new Set());
    
    return max;
};