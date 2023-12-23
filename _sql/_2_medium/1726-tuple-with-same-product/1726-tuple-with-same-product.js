/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    const N = nums.length;
    
    const obj = {}
    let res = 0;
    
    for (let i = 0; i < N; i += 1) {
        for (let j = i + 1; j < N; j += 1) {
            const one = nums[i];
            const two = nums[j];
            const product = one * two;
            
            res += (obj[product] || 0)
            obj[product] = (obj[product] || 0) + 1;
        }
    }
    
    return res * 8;
};