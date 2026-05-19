class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        totalSum = n * (n+1) // 2
        return totalSum - sum(nums)
        