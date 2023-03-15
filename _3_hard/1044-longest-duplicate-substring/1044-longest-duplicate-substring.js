/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
    const N = s.length;
    
    let left = 1;
    let right = N - 1;
    
    const isOK = (size) => {
        const set = new Set();
        
        for (let i = 0; i <= N - size; i += 1) {
            let sub = s.slice(i, i + size);
            if (set.has(sub)) return sub;
            set.add(sub);
        }
        return ""
    }
    
    let res = "";
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const result = isOK(mid);

        if (result) {
            res = result;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return res;
};