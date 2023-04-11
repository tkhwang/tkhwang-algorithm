/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    const N = arrays.length;
    
    let min = arrays[0][0];
    let max = arrays[0][arrays[0].length - 1];
    let res = 0;
    
    for (let i = 1; i < N; i += 1) {
        res = Math.max(
            res,
            max - arrays[i][0],
            arrays[i][arrays[i].length - 1] - min
        )
        min = Math.min(min, arrays[i][0]);
        max = Math.max(max, arrays[i][arrays[i].length - 1]);
    }
    
    return res;
};