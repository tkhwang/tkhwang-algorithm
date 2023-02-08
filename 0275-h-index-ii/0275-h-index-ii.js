/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const N = citations.length;
    const totalSum = citations.reduce((a,b) => a + b, 0);
    
    citations.sort((a,b) => a - b);
    
    let left = 0;
    let right = N + 1
    
    const check = (index) => {
        return citations[N-index] < index;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (check(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left - 1
};