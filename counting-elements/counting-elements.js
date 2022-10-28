/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    const obj = {};
    let count = 0;
    
    for (const num of arr) {
        obj[num] = num;
    }
    
    for (const num of arr) {
        console.log(obj[num + 1])
        if (obj[num + 1] !== undefined) count += 1;
    }
    
    return count;
};