/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    const N = time.length;
    
    let left = 1;
    let right = Number.MAX_SAFE_INTEGER;
    
    const isOK = (length) => {
        let sum = 0;
        for (const t of time) {
            sum += Math.floor((length / t))
        }
        return sum >= totalTrips;
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