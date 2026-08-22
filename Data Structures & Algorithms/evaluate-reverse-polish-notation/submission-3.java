class Solution {
    public int evalRPN(String[] tokens) {
        Map<String, String> map = new HashMap<>();
        map.put("+", "+");
        map.put("-", "-");
        map.put("*", "*");
        map.put("/", "/");

        Stack<Integer> stack = new Stack<>();
        for(int i =0; i < tokens.length; i++) {
            if(map.containsKey(tokens[i])) {
                int a = stack.pop();
                int b = stack.pop();
                int c = evaluate(a, b, tokens[i]);
                stack.push(c);
            } else {
                stack.push(Integer.parseInt(tokens[i]));
            }
        }
        return stack.pop();
    }

    private int evaluate(int a, int b, String ch) {
        switch(ch) {
            case "+":
                return b + a;
            case "-":
                return b - a;
            case "*":
                return b * a;
            case "/":
                if(a == 0) {
                    return 0;

                } else {
                    return b / a;
                }
            default:
                return -1;
        }
    }
}
