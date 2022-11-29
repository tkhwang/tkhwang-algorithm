/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    const N = data.length;
    
    const ones = data.reduce((a,b) => a + b, 0);
    
    let min = Infinity;
    let count = 0;
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = data[right];
        if (cur === 0) count += 1;

        while (right - left + 1 > ones) {
            const leftNum = data[left];
            if (leftNum === 0) count -= 1;
            left += 1;
        }
        if (right - left + 1 === ones) {
            min = Math.min(min, count);
        }
    }
    return min;
    
};