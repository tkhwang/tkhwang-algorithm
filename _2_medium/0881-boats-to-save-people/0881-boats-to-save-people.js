/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    const N = people.length;
    
    people.sort((a,b) => b - a);
    
    let count = 0;
    let right = N - 1;
    for (let left = 0; left <= right; left += 1) {
        let sum = people[left];
        if (sum + people[right] <= limit) {
            right -= 1;
        }
        count += 1;
    }
    return count;
};