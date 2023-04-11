/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    const NA = a.length;
    const NB = b.length;
    
    const count = Math.ceil(NB / NA);
    const candidate = a.repeat(count);
    
    if (candidate.includes(b)) return count;
    if ((candidate + a).includes(b)) return count + 1;
    return -1;
};