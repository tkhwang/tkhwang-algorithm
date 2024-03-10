/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const counts = {};
    
    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1
    }

    const values = Object.values(counts);
    values.sort((a,b) => b - a);
    
    const maxCount = values[0];
    
    let result = 0;
    
    for (const num of nums) {
        if (counts[num] === maxCount) result += 1;
    }

    return result;
};