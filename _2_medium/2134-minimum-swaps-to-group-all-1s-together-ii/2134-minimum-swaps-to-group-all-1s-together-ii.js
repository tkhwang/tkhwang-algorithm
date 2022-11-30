/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const ones = nums.reduce((a,b) => a + b, 0);
    
    const total = [ ...nums, ...nums];
    const N = total.length;
    
    let min = Infinity;
    let count = 0;
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = total[right];
        
        if (cur === 0) count += 1;
        
        while (right - left + 1 > ones) {
            const leftNum = total[left];
            if (leftNum === 0) count -= 1;
            left += 1;
        }
        
        if (right - left + 1 === ones) {
            min = Math.min(min, count);
        }
    }
    
    return min;
};