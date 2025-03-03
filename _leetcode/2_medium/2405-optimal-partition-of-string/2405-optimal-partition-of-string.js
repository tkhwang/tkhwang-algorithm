/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    const res = [];
    const set = new Set();
    for (const ch of s) {
        if (!set.has(ch)) {
            set.add(ch);
        } else {
            res.push(Array.from(set));
            set.clear();
            set.add(ch);
        }
    }
    if (set.size) res.push(Array.from(set));
    return res.length;
};