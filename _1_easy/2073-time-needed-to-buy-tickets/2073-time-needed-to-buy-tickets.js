/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    const N = tickets.length;
    
    let times = 0;
    
    while (tickets[k] > 0) {
        for (let i = 0; i < N; i += 1) {
            if (tickets[i] === 0) continue;
            
            times += 1;
            tickets[i] -= 1;
            
            if (tickets[k] === 0) return times;
        }
    }
    
    return times;
};