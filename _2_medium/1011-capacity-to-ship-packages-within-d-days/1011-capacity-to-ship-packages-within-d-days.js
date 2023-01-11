/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((a,b) => a + b, 0);
    
    const isOK = (limit) => {
        let sum = 0;
        let count = 1;
        for (const weight of weights) {
            if (sum + weight > limit) {
                count += 1;
                sum = weight;
                if (count > days) return false;
            } else {
                sum += weight;
            }
        }
        return count <= days;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isOK(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};