/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {

    let min = Infinity;
    let max = -Infinity;
    
    // find max
    for (const [ , from, to ] of trips) {
        min = Math.min(min, from);
        max = Math.max(max, to);
    }
    
    const delta = Array(max - min + 1).fill(0);
    
    for (const [ passengers, from, to ] of trips) {
        delta[from] += passengers;
        delta[to] -= passengers;
    }
    
    let cur = 0;
    for (let i = min; i <= max; i += 1) {
        cur += delta[i];
        if (cur > capacity) return false;
    }
    
    return true;
};