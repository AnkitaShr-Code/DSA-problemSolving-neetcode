class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount =0, currCount =0;

        for(let i=0; i< nums.length; i++) {
            if(nums[i] === 1){
                currCount += 1;
                maxCount = Math.max(currCount, maxCount);
            } else {
                currCount = 0;
            }
        }
        return Math.max(currCount, maxCount);
    }
}
