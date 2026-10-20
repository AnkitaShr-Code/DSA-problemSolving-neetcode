class Solution {
    public int findMin(int[] nums) {
        int left = 0, right = nums.length -1;

        while(left <= right) {
            if(nums[left] <= nums[right]) {
                return nums[left];
            }

            int mid = left + (right - left) / 2;
            if(mid > 0 && nums[mid] < nums[mid-1]) {
                return nums[mid];
            }

            if(nums[left] > nums[mid]) {
                right = mid -1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }
}
