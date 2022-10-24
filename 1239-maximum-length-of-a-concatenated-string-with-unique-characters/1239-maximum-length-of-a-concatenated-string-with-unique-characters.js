/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const N = arr.length;
    
    const lookup = [];
    
    const getSet = (word) => {
        let b = 0;
        for (const ch of word) {
            const d = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            if ((b & 1 << d) > 0) return - 1;
            
            b |= 1 << d;
        }
        return b;
    }
    
    let max = -Infinity;
    
    const dfs = (index, currentS, currentL) => {
        if (index >= N) {
            if (max < currentL) max = currentL;
            return;
        }
        
        // not use
        dfs(index + 1, currentS, currentL);
        
        // use
        if (lookup[index] !== -1 && (currentS & lookup[index]) === 0) {
            dfs(index + 1, currentS | lookup[index], currentL + arr[index].length)
        }
    }
    
    for (const word of arr) {
        lookup.push(getSet(word));
    }
    
    dfs(0, 0, 0)
    
    return max;
};