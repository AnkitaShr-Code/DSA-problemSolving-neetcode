class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0, end = s.length - 1;

        s = s.toLowerCase();

        while(start < end) {
            if(!s[start].match(/[a-z0-9]/i)) {
                start += 1;
            } else if (!s[end].match(/[a-z0-9]/i)) {
                end -= 1;
            } else {
                if(s[start] != s[end])
                    return false;
                start += 1;
                end -= 1;
            }
        }
        return true;
    }
}
