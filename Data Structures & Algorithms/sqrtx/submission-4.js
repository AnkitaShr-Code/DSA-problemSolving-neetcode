class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x < 2) return x;

        let left = 2;
        let right = Math.floor(x / 2);
        while(left <= right){
            let mid = Math.floor((left +((right - left) / 2)));
            if(x == mid * mid) {
                return mid;
            } else if(x < mid * mid) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return right;
    }
}
