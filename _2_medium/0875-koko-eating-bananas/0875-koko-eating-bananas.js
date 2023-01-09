/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    
    const isOK = (speed) => {
        let sum = 0;
        for (const pile of piles) {
            sum += Math.ceil(pile/speed) 
        }
        return sum <= h;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right)/2);
        
        if (isOK(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};