class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isPowerOfTwo(n) {
        if(n == 1) 
            return true
        else if (n < 1 || n %2 !== 0) {
            return false;
        }

        return this.isPowerOfTwo(n/2);
    }
}
