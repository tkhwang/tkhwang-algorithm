/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    const N = customers.length;
   
    const visitAfterClose = Array(N).fill(0);
    const noshowBeforeClose = Array(N).fill(0)

    let sum = 0;
    for (let i = N; i >= 0; i -= 1) {
        const cur = customers[i];
        if (cur === "Y") sum += 1;
        visitAfterClose[i] = sum;
    }
    
    sum = 0;
    for (let i = 1; i <= N; i += 1) {
        const cur = customers[i-1];
        if (cur === "N") sum += 1;
        noshowBeforeClose[i] = sum;
    }
    
    let min = Infinity;
    let minValue;
    for (let i = 0; i <= N;i += 1) {
        const cur = visitAfterClose[i] + noshowBeforeClose[i];
        if (min > cur) {
            min = cur;
            minValue = i;
        }
    }
    
    return minValue;
};