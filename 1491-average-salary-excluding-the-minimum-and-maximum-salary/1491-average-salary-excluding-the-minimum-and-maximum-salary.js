/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a, b) => a - b);
    
    salary.shift();
    salary.pop();
    
    console.log(salary);
    
    return salary.reduce((a,b) => a + b, 0) / salary.length;
};