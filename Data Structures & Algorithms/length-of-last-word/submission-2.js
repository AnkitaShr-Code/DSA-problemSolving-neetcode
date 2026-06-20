class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // iterative approach without ready to use methods
    lengthOfLastWord(s) {
        let n = s.length -1;
        while(n >= 0) {
            if(s[n] != " ")
                break
            --n;
        }

        let count = 0;
        while(s[n] != " " && n >= 0) {
            count++;
            n--;
        }
        return count;
    }
}
