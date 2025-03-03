/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((a,b) => a + b, 0);
    
    const isOK = (capacity) => {
        let sum = 0;
        let took = 1;
        for (const weight of weights) {
            if (sum + weight > capacity) {
                took += 1;
                if (took > days) return false;
                sum = weight;
            } else {
                sum += weight;
            }
        }
        return took <= days;
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