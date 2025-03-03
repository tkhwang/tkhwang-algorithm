/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    const N = String(n).length;
    
    const set = new Set([ '0', '1', '6', '8', '9' ]);
    
    const obj = {
        "0": "0",
        "1": "1",
        "6": "9",
        "8": "8",
        "9": "6",
    }
    
    if (N === 1) return [ 6, 9 ].includes(n);

    let rotated = "";
    for (const ch of String(n).split("")) {
        if (!set.has(ch)) return false;
        rotated = obj[ch] + rotated;
    }
    
    return String(n) !== rotated
};