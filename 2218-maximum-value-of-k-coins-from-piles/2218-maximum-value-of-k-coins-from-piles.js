/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    const N = piles.length;
    const cache = {};
    const genKey = (index, coinsLeft) => `${index}:${coinsLeft}`;
    
    const dp = (index, coinsLeft, piles) => {
        if (index < 0 || coinsLeft === 0) return 0;
        if (cache[genKey(index, coinsLeft)] !== undefined) return cache[genKey(index, coinsLeft)];
        
        let res = 0;
        let sum = 0;
        for (let j = 0; j <= piles[index].length && j <= coinsLeft; j += 1) {
            res = Math.max(
                res,
                dp(index - 1, coinsLeft - j, piles) + sum
            )
             if (j < piles[index].length) sum += piles[index][j];
        }
        return cache[genKey(index, coinsLeft)] = res;
    }
    
    return dp(N-1, k, piles)
};