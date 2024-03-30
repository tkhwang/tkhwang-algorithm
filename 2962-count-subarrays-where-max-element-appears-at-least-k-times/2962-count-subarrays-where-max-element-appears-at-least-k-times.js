/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const maxNumber = Math.max(...nums),
        maxFreq = [-1]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === maxNumber) {
            maxFreq.push(i)
        }
    }
    maxFreq.push(nums.length)
    const betweenKCount = maxFreq.slice(1).map((e, i) => e - maxFreq[i])
    if (betweenKCount.length < k + 1) return 0
    let suffixSum = betweenKCount.slice(k).reduce((a, b) => a + b, 0),
        result = 0
    for (let i = k; i < betweenKCount.length; i++) {
        result += suffixSum * betweenKCount[i - k]
        suffixSum -= betweenKCount[i]
    }
    return result    
};