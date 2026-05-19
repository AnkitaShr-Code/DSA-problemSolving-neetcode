class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int maxCount =0, currCount =0;

        for (int i=0; i< nums.length; i++) {
            if(nums[i] == 1) {
                currCount += 1;
                maxCount = Math.max(currCount, maxCount);
            } else {
                currCount = 0;
            }
        }

        return Math.max(maxCount, currCount);
    }
}