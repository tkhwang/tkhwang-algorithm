/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 */
var countMatchingSubarrays = function(nums, pattern) {
    const N = nums.length;
    const NP = pattern.length;
    
    let res = 0;
    
    const backtrack = (index, pIndex) => {
        if (pIndex >= NP) {
            res += 1;
            return;
        }
        
        if (pIndex === -1) {
            backtrack(index + 1, pIndex + 1)
        } else {
            const prv = nums[index - 1];
            const cur = nums[index];
            
            if (
                (pattern[pIndex] ===  1 && prv < cur) ||
                (pattern[pIndex] ===  0 && prv == cur) ||
                (pattern[pIndex] === -1 && prv > cur)
            ) {
                backtrack(index + 1, pIndex + 1)
            }
        }
    }
     
    for (let i = 0; i < N - NP; i += 1) {
        backtrack(i, -1)
    }
    
    return res;
};