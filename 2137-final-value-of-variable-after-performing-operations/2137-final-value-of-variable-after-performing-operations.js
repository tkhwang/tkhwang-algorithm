/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let value = 0;
    for (const operation of operations) {
        if (operation === "++X" || operation === "X++") value += 1;
        else if (operation === "--X" || operation === 'X--') value -= 1;
    }
    return value;
};