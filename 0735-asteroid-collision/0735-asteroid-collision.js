/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const N = asteroids.length;
    const stack = [];
    
    for (let i = 0; i < N; i += 1) {
        const cur = asteroids[i];
        const last = stack.at(-1);
        
        if (!stack.length || last < 0 || cur > 0) {
            stack.push(cur);
        } else if (last + cur === 0) {
            stack.pop();
        } else if (Math.abs(last) < Math.abs(cur)) {
            stack.pop();
            i -= 1;
        }
    }
    
    return stack;
};