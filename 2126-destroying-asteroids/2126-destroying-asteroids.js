/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    const n = asteroids.length;
    
    const dp = Array(n).fill(0);
    
    asteroids.sort((a,b) => a - b);
    
    if(asteroids[0] > mass) return false;
    
    dp[0] = mass + asteroids[0];
    
    for (let i = 1; i < n; i += 1) {
        if (dp[i-1] < asteroids[i]) return false;
        
        dp[i] = dp[i-1] + asteroids[i];
    }
    
    return true;
};