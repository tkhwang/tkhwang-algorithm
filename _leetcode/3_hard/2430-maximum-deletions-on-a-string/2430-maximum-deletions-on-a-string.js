/**
 * @param {string} s
 * @return {number}
 */
var deleteString = function(s) {
    const N = s.length;
    const cache = {};
    
    const backtrack = (index) => {
        if (index >= N) return 0;
        if (cache[index] !== undefined) return cache[index];
        
        let res = 1;
        let j = 1;
        while (index + 2 * j <= N && N - index - j + 1 > res) {
            if (s.slice(index, index + j) === s.slice(index + j, index + 2 * j)) {
                res = Math.max(res, 1 + backtrack(index + j))
            }
            j += 1;
        }
        return cache[index] = res;
    }

    return backtrack(0)
};