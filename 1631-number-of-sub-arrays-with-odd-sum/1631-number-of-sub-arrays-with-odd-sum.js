/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    const MOD = 7 + 10 ** 9;
    
    let evenCount = 1; // Start with 1 for empty subarray (sum = 0 is even)
    let oddCount = 0;
    let currentSum = 0;
    let result = 0;
    
    for (let num of arr) {
        currentSum += num;
        
        if (currentSum % 2 === 1) {
            result = (result + evenCount) % MOD;
            oddCount++;
        } else {
            result = (result + oddCount) % MOD;
            evenCount++;
        }
    }
    
    return result;
};