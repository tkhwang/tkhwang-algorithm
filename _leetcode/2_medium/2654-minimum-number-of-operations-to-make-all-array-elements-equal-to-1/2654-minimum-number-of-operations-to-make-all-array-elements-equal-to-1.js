/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1)

    const N = nums.length;
    const freq = {};
    for (let i = 0; i < N; i += 1) {
        const cur = nums[i];
        freq[cur] = (freq[cur] || 0) + 1;
    }
    if (freq["1"] > 0) return N - freq["1"];
    let min = Infinity;
    
    for (let i = 0; i < N; i += 1) {
        let one = nums[i];
        for (let j = i + 1; j < N; j += 1) {
            const two = nums[j];
            one = getGCD(one, two);
            if (one === 1) {
                if (min > j - i + N - 1) min = j - i + N - 1;
            }
        }
    }
    return min === Infinity ? -1 : min;
};