/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    /*
     1 : 1
     2 : 3
     3 : 3 + 3 = 6
     4 : 6 + 4 = 10
     */
    let sum = 1;
    let floor = 1;
    while (sum <= n) {
        floor += 1;
        sum += floor;
    }
    return floor - 1;
};