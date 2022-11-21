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
    
    const used = Array(max - min + 1).fill(0);
    
    for (const [ passengers, from, to ] of trips) {
        for (let i = from; i < to; i += 1) {
            used[i] += passengers;
        }
    }
    
    for (const [ passengers, from, to ] of trips) {
        for (let i = from; i < to; i += 1) {
            if (used[i] > capacity) return false;
        }
    }
    
    console.log(used);
    
    return true;
};