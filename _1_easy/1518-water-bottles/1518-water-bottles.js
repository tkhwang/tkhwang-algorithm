/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let count = numBottles;
    while (numBottles >= numExchange) {
        console.log(numBottles);
        
        let n = 0;
        while ((numBottles - n) % numExchange !== 0) {
            n += 1;
        }
        const bonus = (numBottles - n) / numExchange;
        count += bonus;
        
        numBottles = bonus + n;
    }
    
    return count;    
};