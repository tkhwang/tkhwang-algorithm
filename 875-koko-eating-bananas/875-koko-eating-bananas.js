/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles)
    
    const isPossible = (speed) => {
        let hour = 0;
        for (const p of piles) {
            hour += Math.ceil(p/speed)
        }
        return hour <= h;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isPossible(mid)) right = mid;
        else left = mid + 1;
    }
    
    return left;
};