/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, N) {
    const res = []
    let i = 0;
    
    for (const num of target) {
        while (i < num - 1) {
            res.push("Push");
            res.push("Pop");
            i += 1;
        }
        res.push("Push");
        i += 1;
    }
    
    return res;
};