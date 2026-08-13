class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0, maxLength = 0;
        let map = new Map();

        for(let right =0; right<s.length; right++) {
            const ch = s[right];
            if(map.has(ch) && map.get(ch) >= left) {
                left = map.get(ch) + 1;
            }
            map.set(ch, right);
            maxLength = Math.max(maxLength, right - left +1);
        }
        return maxLength;
    }
}
