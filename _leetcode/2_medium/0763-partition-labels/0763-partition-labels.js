/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const obj = {};
    for (const [ i, ch ] of s.split("").entries()) {
        obj[ch] = i;
    }

    const res = [ ];

    let size = 0;
    let end = 0;
    
    for (const [ i, ch ] of s.split("").entries()) {
        size += 1;
        end = Math.max(end, obj[ch]);
        
        if (i === end) {
            res.push(size);
            size = 0;
        }
    }
    
    return res;
};