/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const N = questions.length;
    const cache = {};

    const dp = (index) => {
        if (index >= N) return 0;
        if (cache[index] !== undefined) return cache[index];

        let res = -Infinity;
        
        // not take
        
        res = Math.max(
            res,
            dp(index + 1)
        )
        
        // take
        res = Math.max(
            res,
            questions[index][0] + dp(index + questions[index][1] + 1)
        )

        return cache[index] = res;
    }
    
    return dp(0)
};