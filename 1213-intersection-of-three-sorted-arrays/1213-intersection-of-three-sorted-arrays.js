/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    const freq = {};
    
    for (const arr of [ arr1, arr2, arr3 ]) {
        for (const num of arr) {
            freq[num] = (freq[num] || 0) + 1;
        }
    }
    
    const res = [];
    for (const key in freq) {
        if (freq[key] >= 3) res.push(key);
    }
    
    return res;
};