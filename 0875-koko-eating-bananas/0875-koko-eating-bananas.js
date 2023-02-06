/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = 10 ** 9;
    
    const check = (speed) => {
        let time = 0;
        for (const pile of piles) {
            time += Math.ceil(pile / speed);
        }
        return time <= h;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (check(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};