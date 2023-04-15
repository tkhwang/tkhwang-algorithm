/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(_s, goal) {
    const s = _s.split("");
    
    const set = new Set();

    const shift = (array) => {
        array.push(array.shift());
    }
    
    let cur = s.join("");
    while (!set.has(cur)) {
        set.add(cur);
        if (cur === goal) return true;
        shift(s);
        cur = s.join("");
    }
    return false;
};