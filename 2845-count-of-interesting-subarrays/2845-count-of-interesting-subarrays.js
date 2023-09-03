/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
    let res = 0;
    let acc = 0;
    const count = { 0: 1 };
    
    for (const [ i, num ] of nums.entries()) {
        acc = (acc + (num % modulo === k ? 1 : 0)) % modulo;
        res += (count[(modulo + acc - k) % modulo] || 0);
        count[acc] = (count[acc] || 0) + 1;
    }
    
    return res;
};