/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const freq = {
        "a": 0,
        "A": 0,
        "e": 0,
        "E": 0,
        "i": 0,
        "I": 0,
        "o": 0,
        "O": 0,
        "u": 0,
        "U": 0
    }
    
    const set = new Set(Object.keys(freq));
    
    const N = s.length;
    const half = Math.floor(N/2);
    
    let counts = 0;
    for (let i = 0; i < half; i += 1) {
        const cur = s[i];
        if (set.has(cur)) counts += 1;
    }
    
    for (let i = half; i < N; i += 1) {
        const cur = s[i];
        if (set.has(cur)) counts -= 1;
    }
    
    return counts === 0;
};