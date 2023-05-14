/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    const N = nums.length;
    
    const getGCD = (num1, num2) => num2 > 0 ? getGCD(num2, num1 % num2) : num1;

    const cache = {}
    const genKey = (index, mask) => `${index}:${mask}`;
    
    const dp = (index, mask) => {
        if (index >= N) return 0;
        if (cache[genKey(index, mask)] !== undefined) return cache[genKey(index, mask)];
        
        let res = 0;
        for (let j = 0; j < N; j += 1) {
            for (let k = j + 1; k < N; k += 1) {
                const newMask = (1 << j) + (1 << k);
                if (mask & newMask) continue;
                
                res = Math.max(
                    res,
                    index * getGCD(nums[j], nums[k]) + dp(index + 1, mask + newMask)
                )
            }
        }
        return cache[genKey(index, mask)] = res;
    }
    
    return dp(1, 0)    
};