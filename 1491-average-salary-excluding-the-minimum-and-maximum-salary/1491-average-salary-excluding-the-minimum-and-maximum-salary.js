/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {

    const N = salary.length;
    
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;
    
    for (let i = 0; i < N; i += 1) {
        sum += salary[i];
        
        if (min > salary[i]) min = salary[i];
        if (max < salary[i]) max = salary[i];
    }
    
    return (sum - min - max) / (N - 2);
};