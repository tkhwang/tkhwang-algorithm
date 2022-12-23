/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    const N = s1.length;
    
    let count = 0, arr1 = [], arr2 = []
    
    for (let i = 0; i < N; i++) {
        if (s1[i] !== s2[i]) {
            arr1.push(s1[i])
            arr2.push(s2[i])
            count++
        }
        if (count > 2)
            return false
    }
    if (count === 2) {
        return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort())
    }
    return count === 0
};