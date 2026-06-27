class Solution {
    public boolean isPalindrome(String s) {
        int start = 0, end = s.length() - 1;

        s = s.toLowerCase();

        while(start < end) {
            if(!Character.isLetterOrDigit(s.charAt(start))) {
                start += 1;
            } else if(!Character.isLetterOrDigit(s.charAt(end))) {
                end -= 1;
            } else {
                if(s.charAt(start) != s.charAt(end)) {
                    return false;
                }
                start += 1;
                end -= 1;
            }
        }
        return true;
    }
}
