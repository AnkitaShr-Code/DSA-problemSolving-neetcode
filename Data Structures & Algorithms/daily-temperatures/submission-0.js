class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    dailyTemperatures(arr) {
        let n = arr.length;
        let stack = [];
        let ans = Array(n).fill(0);

        stack.push(n-1);

        for(let i = n-2; i>= 0; i--) {
            while(stack.length) {
                let top = stack[stack.length -1];
                if(arr[top] > arr[i]) {
                    ans[i] = top - i;
                    break;
                } else {
                    stack.pop();
                }
            }
            stack.push(i);
        }
        return ans;
    }
}
