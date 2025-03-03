/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    /*
     *       |--------
     *       | left, right
     */
    let left = 1;
    let right = 10 ** 9;
    
    const isOK = (speed) => {
        let times = 0;
        for (const pile of piles) {
            times += Math.ceil(pile/speed);
        }
        return times <= h;
    }
    
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