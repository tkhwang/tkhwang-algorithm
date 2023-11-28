/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
    const mod = 7 + 10 ** 9;
    let res = 1;
    let prevSeat = 0;
    let numSeats = 0;

    for (let i = 0; i < corridor.length; i++) {
        const c = corridor.charAt(i);
        if (c === 'S') {
            numSeats += 1;
            if (numSeats > 2 && numSeats % 2 === 1) {
                res = res * (i - prevSeat) % mod;
            }
            prevSeat = i; 
        }
    }

    return numSeats > 1 && numSeats % 2 === 0 ? res : 0;       
};