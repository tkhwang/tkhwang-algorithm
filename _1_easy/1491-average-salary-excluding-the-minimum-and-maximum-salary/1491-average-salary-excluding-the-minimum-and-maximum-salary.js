/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const N = salary.length;
    
    salary.sort((a,b) => a - b);
    
    const mid = salary.slice(1, N-1);
    
    return mid.reduce((acc, cur) => acc + cur, 0)/mid.length;
};