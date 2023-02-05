/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
    const freq = {};

    for (const num of basket1) {
        freq[num] = (freq[num] || 0) + 1;
    }
    for (const num of basket2) {
        freq[num] = (freq[num] || 0) - 1;
    }
    
    const last = [];
    
    for (const num in freq) {
        if (freq[num] % 2 === 1) return -1;
        
        for (let i = 0; i < Math.abs(freq[num]) / 2; i += 1) {
            last.push(+num);
        }
    }
    
    const min = Math.min(...basket1, ...basket2);
    
    let res = 0;
    for (let i = 0; i < last.length / 2; i += 1) {
        res += Math.min(
            last[i],
            2 * min
        )
    }
    return res;
};