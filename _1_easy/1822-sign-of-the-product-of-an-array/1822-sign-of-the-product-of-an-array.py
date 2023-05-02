class Solution:
    def arraySign(self, nums: List[int]) -> int:
        product = 1
        
        for num in nums:
            product *= num
            if num == 0:
                return 0
        
        return 1 if product > 0 else -1
        