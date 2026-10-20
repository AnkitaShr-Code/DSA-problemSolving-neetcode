class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        left, right = 0, len(nums)-1
        ans = [-1, -1]
        while left < right:
            mid = left + (right - left) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid
        if left < len(nums) and nums[left] == target:
            ans[0] = left
        else:
            return ans
        
        left, right = 0, len(nums)-1
        while left < right:
            mid = left + (right - left + 1) // 2
            if nums[mid] > target:
                right = mid -1
            else:
                left = mid
        if left < len(nums) and nums[left] == target:
            ans[1] = left

        return ans