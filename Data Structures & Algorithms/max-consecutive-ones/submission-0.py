class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        maxCount, currCount =0, 0

        for num in nums:
            if num == 1:
                currCount += 1
            else:
                maxCount = max(maxCount, currCount)
                currCount = 0

        return max(maxCount, currCount)
        