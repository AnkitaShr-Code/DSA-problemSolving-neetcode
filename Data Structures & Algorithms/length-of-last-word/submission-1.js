class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        s = s.trim();
        let temp = s.split(" ");
        return temp[temp.length - 1].length;
    }
}
