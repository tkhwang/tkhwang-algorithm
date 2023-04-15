/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    const N = piles.length;
    const cache = {};
    const genKey = (index, remain) => `${index}:${remain}`;
    
    const dp = (index, remain) => {
        if (index < 0 || remain === 0) return 0;
        if (cache[genKey(index, remain)] !== undefined) return cache[genKey(index, remain)];
        
        let res = 0;
        let sum = 0;
        for (let j = 0; j <= Math.min(piles[index].length, remain); j += 1) {
            res = Math.max(
                res,
                dp(index - 1, remain - j, piles) + sum
            )
             if (j < piles[index].length) sum += piles[index][j];
        }       
        return cache[genKey(index, remain)] = res;
    }
    
    return dp(N - 1, k)
};