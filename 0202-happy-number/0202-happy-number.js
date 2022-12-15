/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();
    
    while (n !== 1) {
        n = String(n).split("")
            .map(Number)
            .map((v) => v * v)
            .reduce((acc, cur) => acc + cur, 0);
        if (set.has(n)) return false;
        set.add(n);
    }
    return true;
};