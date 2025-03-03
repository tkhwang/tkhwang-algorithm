/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const N = candies.length;
    const max = Math.max(...candies);
    const obj = {};
    const res = Array(N).fill(false);
    
    for (const [ i, candy ] of candies.entries()) {
        if (candy in obj) {
            res[i] = true;
        } else {
            const cur = candy + extraCandies;
            if (max <= cur) {
                obj[candy] = candy;
                res[i] = true;
            } else {
                res[i] = false;
            }
        }
    }
    return res;
};