/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const obj = {};
    
    for (const [ i, num ] of nums.entries()) {
        if (obj[num] === undefined) obj[num] = [];
        obj[num].push(i);
    }
    
    let res = 0;
    
    for (const key in obj) {
        const length = obj[key].length;
        
        if (length === 1) continue;
            
        res += length * (length - 1);
    }
    
    return res / 2
};