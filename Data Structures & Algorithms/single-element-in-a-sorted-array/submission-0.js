class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums) {
        let left = 0, right = nums.length - 1;

        while(left < right) {
            let mid = Math.floor(left + (right - left) / 2);

            if(mid % 2 == 1) mid--;

            if(nums[mid] == nums[mid + 1]) left = mid + 2;
            else right = mid;
        }
        return nums[left];
    }
}
