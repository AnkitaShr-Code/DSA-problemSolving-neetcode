class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDuplicates(nums) {
        let result = [];
        for(let num of nums) {
            num = Math.abs(num);
            if(nums[num - 1] < 0) {
                result.push(num);
            } else {
                nums[num - 1] *= -1;
            }
        }
        return result;
    }
}
