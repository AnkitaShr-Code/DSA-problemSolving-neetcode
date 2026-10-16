class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left =0, right = nums.length -1;

        while (left <= right) {
            let mid = left + Math.floor((right - left ) / 2);
            if(nums[mid] == target) 
                return mid;

            if(nums[left] <= nums[mid]) {
                if(target >= nums[left] && target < nums[mid] ) {
                    right = mid -1;
                } else {
                    left = mid + 1;
                }
            } else {
                if(target <= nums[right] && target > nums[mid]) {
                    left = mid + 1;
                } else {
                    right = mid -1;
                }
            }
        }
        return -1;

    }
}
