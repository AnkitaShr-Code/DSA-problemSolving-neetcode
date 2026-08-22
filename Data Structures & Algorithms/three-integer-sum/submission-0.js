class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        const result = [];
        let n = nums.length;

        for(let i =0; i<n-2; i++) {
            if(i > 0 && nums[i] === nums[i - 1]) continue;
            if(nums[i] > 0) break;

            let left = i + 1;
            let right = n -1;
            while ( left < right) {
                if(nums[i] + nums[left] + nums[right] == 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) 
                        left++;
                    while (left < right && nums[right] === nums[right - 1]) 
                        right--;
                    left++;
                    right--;
                } else if(nums[i] + nums[left] + nums[right] > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        return result;
    }
}
