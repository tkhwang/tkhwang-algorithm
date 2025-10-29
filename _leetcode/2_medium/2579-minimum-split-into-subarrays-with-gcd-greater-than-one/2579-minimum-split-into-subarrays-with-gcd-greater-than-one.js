/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSplits = function(nums) {
    const N = nums.length;

    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    let currentGCD = nums[0];
    let count = 1;

    for (let i = 1; i < N; i += 1) {
        currentGCD = gcd(nums[i], currentGCD);
        if (currentGCD === 1) {
            count += 1;
            currentGCD = nums[i];
        }
    }

    return count;
};