class Solution {
    public String longestCommonPrefix(String[] strs) {
        int x =0;
        while(x < strs[0].length()) {
            char ch = strs[0].charAt(x);
            for(int i =1; i < strs.length; i++) {
                if(x == strs[i].length() || ch != strs[i].charAt(x)){
                    return strs[0].substring(0, x);
                }

            }
            x++;
        }
        return strs[0];
    }
}