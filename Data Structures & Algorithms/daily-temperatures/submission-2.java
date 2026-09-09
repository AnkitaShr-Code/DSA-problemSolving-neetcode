class Solution {
    public int[] dailyTemperatures(int[] arr) {
        int n = arr.length;
        int[] ans = new int[n];
        Stack<Integer> stack = new Stack<>();

        stack.push(n-1);
        for(int i =n-2; i>=0; i--) {
            while(!stack.isEmpty()) {
                int top = stack.peek();
                if(arr[i] >= arr[top] ) {
                    stack.pop();
                } else {
                    ans[i] = top - i;
                    break;
                }
            }
            stack.push(i);
        }
        return ans;
    }
}
