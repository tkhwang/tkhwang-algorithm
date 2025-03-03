/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b) => a - b);
    
    const N = citations.length;
    
    let left = 0;
    let right = N - 1;

    while (left <= right) {
        const mid = Math.floor((left + right)/2);
        
        if (citations[mid] === N - mid) return N - mid;
        else if (citations[mid] < N - mid) {
            left = mid + 1;
        } else if (citations[mid] > N - mid) {
            right = mid - 1;
        }
    }
    return N - left;
};