/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a,b) => a - b);
    
    return salary.slice(1, -1).reduce((a,b) => a + b, 0) / ( salary.length - 2 )
};