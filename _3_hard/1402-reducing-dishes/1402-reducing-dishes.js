/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    const N = satisfaction.length;
    
    satisfaction.sort((a,b) => a - b);
    console.log(satisfaction);
    
    const calc = (array) => array.map((v,i) => v * (i + 1))
                                 .reduce((a,b) => a + b, 0);
    
    // const queue = new Queue();
    const queue = [];
    
    let sum = 0;
    let prvSum = -1;
    for (let i = N -1; i >= 0; i -= 1) {
        const cur = satisfaction[i];
        queue.unshift(cur);
        sum = calc(queue);
        if (sum < 0) return 0;
        if (prvSum !== -1 && prvSum > sum) return prvSum;
            
        prvSum = sum;
    }
    return sum;
};