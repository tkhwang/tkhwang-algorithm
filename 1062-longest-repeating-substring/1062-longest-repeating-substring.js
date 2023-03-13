/**
 * @param {string} s
 * @return {number}
 */
var longestRepeatingSubstring = function(s) {
    const N = s.length;
    
    let left = 0;
    let right =  N - 1;
    
    const isOK = (size) => {
        const set = new Set();
        for (let i = 0; i <= N - size; i += 1) {
            const sub = s.slice(i, i + size)
            if (set.has(sub)) return true;
            set.add(sub);
        }
        return false;
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isOK(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};

    