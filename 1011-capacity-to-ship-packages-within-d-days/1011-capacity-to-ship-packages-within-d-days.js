/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((a,b) => a + b, 0);
    
    const shouldDecrease = (capacity) => {
        let count = 1;
        let sum = 0;
        for (const weight of weights) {
            if (sum + weight > capacity) {
                count += 1;
                if (count > days) return false;
                sum = weight;
            } else {
                sum += weight;
            }
        }
        return count <= days;
    }
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if(shouldDecrease(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};