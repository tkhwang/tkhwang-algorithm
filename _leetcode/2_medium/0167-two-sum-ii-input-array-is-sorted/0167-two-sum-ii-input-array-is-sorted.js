/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const N = numbers.length;
    
    let left = 0;
    let right = N - 1;
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) return [ left + 1, right + 1 ];
        else if (sum < target) {
            left += 1;
        } else if (sum > target) {
            right -= 1;
        }
    }
};