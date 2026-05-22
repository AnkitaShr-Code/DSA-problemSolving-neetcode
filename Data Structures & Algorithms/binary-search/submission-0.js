class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left =0, right = nums.length - 1;
        

        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(nums[mid] === target)
                return mid;
            else if(target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}
