/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    const N = people.length;

    let left = 0;
    let right = N - 1;

    let res = 0;

    people.sort((a,b) => a - b);

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left += 1;
        } 
        right -= 1;
        res += 1;
    }
    return res;
};