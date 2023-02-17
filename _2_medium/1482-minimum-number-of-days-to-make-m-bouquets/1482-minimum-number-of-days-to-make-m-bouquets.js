/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    let left = 1;
    let right = 10 ** 9;
    
    const isOK = (b) => {
        let count = 0;
        let flow = 0;
        let bouq = 0;
        for (const bloom of bloomDay) {
            if (bloom > b) {
                flow = 0;
            } else {
                flow += 1;
            }
            if (flow >= k) {
                flow = 0;
                bouq += 1;
            }
        }
        return bouq >= m;
    }
    
    if (bloomDay.length < m * k) return -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isOK(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};