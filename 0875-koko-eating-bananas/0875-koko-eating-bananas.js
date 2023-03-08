/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = 10 ** 9;
    
    const isOK = (speed) => {
        let total = 0;
        for (const pile of piles) {
            total += Math.ceil(pile / speed);
        }
        return total <= h;
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