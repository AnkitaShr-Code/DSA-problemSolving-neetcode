class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> hm = new HashMap<>();

        hm.put('{', '}');
        hm.put('(', ')');
        hm.put('[', ']');

        for(int i =0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if(hm.containsKey(ch)) {
                stack.push(ch);
            } else {
                if(stack.isEmpty()) 
                    return false;
                char top = stack.pop();
                if(ch != hm.get(top)){
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}
