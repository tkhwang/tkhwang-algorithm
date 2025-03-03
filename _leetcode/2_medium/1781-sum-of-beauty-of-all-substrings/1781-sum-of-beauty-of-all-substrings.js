/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    const N = s.length;
    
    let res = 0;
    
    const getMax = (array) => Math.max(...array);
    const getMin = (array) => Math.min(...array);
    
    for (let i = 0; i < N; i += 1) {
        const freq = Array(26).fill(0);
        for (let j = i; j < N; j += 1) {
            const cur = s[j].charCodeAt() - 'a'.charCodeAt();
            freq[cur] += 1;
            const filtered = freq.filter((v) => v !== 0);
            res += getMax(filtered) - getMin(filtered);
        }
    }
    return res;
};