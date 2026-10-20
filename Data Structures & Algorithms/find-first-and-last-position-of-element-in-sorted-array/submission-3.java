class Solution {
    public int[] searchRange(int[] nums, int target) {
        int left = 0, right = nums.length -1;

        int[] ans = {-1, -1};

        while(left < right) {
            int mid = left + (right - left) /2;
            if(nums[mid] < target ) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if(left < nums.length && nums[left] == target) {
            ans[0] = left;
        } else {
            return ans;
        }
        
        left = 0;
        right = nums.length - 1;
        while(left < right) {
            int mid = left + (right - left + 1) / 2;
            if(nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid;
            }
        }

        if(right < nums.length && nums[right] == target) {
            ans[1] = right;
        }
        return ans;
    }
}