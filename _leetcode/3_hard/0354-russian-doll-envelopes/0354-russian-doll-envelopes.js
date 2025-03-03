/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    const bisectLeft = (array, target) => {
        const N = array.length;
        
        // [0, N)
        let left = 0;
        let right = N;
        
        while (left < right) {
            const mid = Math.floor((left + right)/2);
            
            // => [left, mid)
            if (array[mid] === target) {
                right = mid;
            // select left space => [left, mid)
            } else if (array[mid] > target) {
                right = mid;
            // select right space => [mid + 1, right)
            } else if (array[mid] < target) {
                left = mid + 1;
            }
        }
        return left;
    }
    
    envelopes.sort((a,b) => a[0] - b[0] || b[1] - a[1]);
    
    const piles = [];
    
    for (const [first, last] of envelopes) {
        const index = bisectLeft(piles, last);
        
        if (index < piles.length) {
            piles[index] = last;
        } else {
            piles.push(last);
        }
    }
    
    return piles.length;
};