/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let left = 1;
    let right = Number.MAX_SAFE_INTEGER;
    
    const isOK = (n) => {
        let trips = 0;
        for (const t of time) {
            trips += Math.floor(n / t);
        }
        return trips >= totalTrips;
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