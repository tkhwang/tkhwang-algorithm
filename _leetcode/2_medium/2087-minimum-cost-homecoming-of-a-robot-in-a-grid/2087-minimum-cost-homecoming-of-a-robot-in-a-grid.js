/**
 * @param {number[]} startPos
 * @param {number[]} homePos
 * @param {number[]} rowCosts
 * @param {number[]} colCosts
 * @return {number}
 */
var minCost = function(startPos, homePos, rowCosts, colCosts) {
    const [ initR, initC ] = startPos;
    const [ endR, endC ] = homePos;
    
    const deltaR = initR < endR ? 1 : -1;
    const deltaC = initC < endC ? 1 : -1;
    
    let sum = 0;
    
    for (let r = initR ; r !== endR; r += deltaR) {
        sum += rowCosts[r + deltaR];
    }
    for (let c = initC ; c !== endC; c += deltaC) {
        sum += colCosts[c + deltaC];
    }
    
    return sum;
};