/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const N = arr.length;
    
    const freq = {};
    for (const n of arr) {
        freq[n] = (freq[n] || 0) + 1;
    }
    
    const keys = Object.keys(freq);
    
    keys.sort((a,b) => freq[b] - freq[a])
    
    let remain = N;
    let count = 0;
    
    while (remain > N/2) {
        remain -= freq[keys[count]];
        count += 1;
    }
    
    return count;
};