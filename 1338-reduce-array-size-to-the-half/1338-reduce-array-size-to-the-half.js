/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const N = arr.length;
    
    const freq = {};
    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    
    console.log(freq)
    
    const keys = Object.keys(freq);
    keys.sort((a,b) => freq[b] - freq[a]);
    
    let count = 0;
    let size = N;
    let i = 0;
    while (size > Math.floor(N/2)) {
        size -= freq[keys[i]];
            
        i += 1;
        count += 1;
    }
    
    return count;
};