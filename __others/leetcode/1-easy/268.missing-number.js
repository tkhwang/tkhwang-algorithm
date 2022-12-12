/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if (nums.length === 1) return nums[0] === 0 ? 1 : 0;

  const sortedNums = nums.sort((a, b) => a - b);
  if (sortedNums[0] !== 0) return 0;

  for (let i = 0; i < sortedNums.length - 1; i += 1) {
    if (sortedNums[i + 1] !== sortedNums[i] + 1) {
      return sortedNums[i] + 1;
    }
  }
  return nums[nums.length - 1] + 1;
};
