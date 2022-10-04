/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let binarySearch = (arr, target) => {
        left = 0;
        right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return left;
    }
    
    potions.sort((a, b) => a - b);
    let ans = [];
    let m = potions.length;
    
    for (const spell of spells) {
        let i = binarySearch(potions, success / spell);
        ans.push(m - i);
    }
    
    return ans;
};