class Solution {
    public int mySqrt(int x) {
        if(x < 2) return x;

        int left = 2, right = x / 2;

        while(left <= right) {
            int mid = left + ((right - left) / 2);
            long sq = (long) mid * mid;

            if(x == sq) {
                return mid;
            } else if(x < sq) {
                right = mid -1;
            } else {
                left = mid + 1;
            }
        }
        return right;
    }
}