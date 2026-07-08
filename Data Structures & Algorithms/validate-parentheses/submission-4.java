class Solution {
    public boolean isValid(String s) {
        Stack<Character> stackArr = new Stack<>();

        Map<Character, Character> map = new HashMap<>();
        map.put('(', ')');
        map.put('{', '}');
        map.put('[', ']');

        for(int i =0; i<s.length(); i++) {
            char ch = s.charAt(i);
            if(map.containsKey(ch)){
                stackArr.push(ch);
            } else{
                if(stackArr.isEmpty()) return false;
                char top = stackArr.pop();
                if(ch != map.get(top)) {
                    return false;
                }
            }
        }
        return stackArr.isEmpty();

        
    }
}
