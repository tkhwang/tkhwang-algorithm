class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        obj = {}
        for i, num in enumerate(nums):
            if target - num in obj:
                return [ obj[target-num], i ]
            else:
                obj[num] = i
        return []
        