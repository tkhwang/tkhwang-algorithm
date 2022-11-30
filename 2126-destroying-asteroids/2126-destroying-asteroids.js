/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    const N = asteroids.length;
    
    asteroids.sort((a,b) => a - b);

    if (mass < asteroids[0]) return false;
    
    const dp = Array(N).fill(0);
    dp[0] = mass + asteroids[0];
    
    for (let i = 1; i < N; i += 1) {
        if (dp[i-1] < asteroids[i]) return false;
        dp[i] = dp[i-1] + asteroids[i];
    }
    
    return true;
};