/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
    let prv = 0;
    let result = 0;
    for (const one of target) {
        const localDiff = one - prv;
        if (localDiff > 0) result += localDiff;
        prv = one;
    }
    return result;
};