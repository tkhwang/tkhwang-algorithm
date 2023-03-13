/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words.sort((a,b) => a.length - b.length);
    
    let max = 1;
    const dp = {}
    
    for (const word of words) {
        dp[word] = 1;

        for (let i = 0; i < word.length; i += 1) {
            const prv = word.slice(0, i) + word.slice(i + 1);
            
            if (dp[prv] !== undefined) {
                dp[word] = Math.max(dp[word], dp[prv] + 1);
                if (max < dp[word]) max = dp[word];
            }
        }
    }
    return max;
};