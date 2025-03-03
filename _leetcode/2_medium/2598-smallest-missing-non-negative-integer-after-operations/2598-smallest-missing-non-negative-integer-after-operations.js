/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
    const N = nums.length;

    const obj = {};
    const cache = {};
    
    const conv = (num) => {
        if (num >= 0) return num % value;
        return ((num % value) + value) % value;
        
    }
    
    for (const num of nums) {
        const key = conv(num);
        obj[key] = (obj[key] || 0) + 1;
    }
    
    let target = 0;
    while (true) {
        const key = target % value;
        if (obj[key] === undefined || obj[key] === 0) return target;
        obj[key] -= 1;
        if (obj[key] === 0) delete obj[key];
        target += 1;
    }
};