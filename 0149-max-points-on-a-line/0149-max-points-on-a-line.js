/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const N = points.length;
    
    const getGCD = (num1, num2) => num2 > 0 ? getGCD(num2, num1 % num2) : num1;
    
    const genKey = (dx, dy) => `${dx}:${dy}`;
    
    let max = 0;
    
    for (const [ x1, y1 ] of points) {
        const lookup = {};
        
        for (const [ x2, y2 ] of points) {
            let dx = x2 - x1;
            let dy = y2 - y1;
            
            if (dx === 0 && dy === 0) continue;
            
            const gcd = getGCD(dx, dy);
            
            dx /= gcd;
            dy /= gcd;
            
            lookup[genKey(dx, dy)] = (lookup[genKey(dx, dy)] || 0) + 1;
        }
        
        max = Math.max(max, Math.max(...Object.values(lookup), 0) + 1);
    }
    return max;
};