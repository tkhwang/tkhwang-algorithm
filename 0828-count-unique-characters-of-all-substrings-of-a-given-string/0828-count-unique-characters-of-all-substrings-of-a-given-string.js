/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    const N = s.length;
    
    const arr = Array(26).fill(null).map((_) => []);
    
    for (const [ index, ch ] of s.split("").entries()) {
        const i = ch.charCodeAt(0) - 'A'.charCodeAt(0);
        if (arr[i].length === 0)  arr[i].push(-1);
        arr[i].push(index);
    }
    for (let i = 0; i < 26; i += 1) {
        if (arr[i].length === 0) continue;
        arr[i].push(N);
    }
    
    let count = 0;
    
    for (let i = 0; i < 26; i += 1) {
        if (arr[i].length === 0) continue;
        for (let j = 1; j < arr[i].length - 1; j += 1) {
            const prv = arr[i][j-1];
            const cur = arr[i][j];
            const nxt = arr[i][j+1];
            
            count += (cur - prv) * (nxt - cur);
        }
    }
    return count;
};