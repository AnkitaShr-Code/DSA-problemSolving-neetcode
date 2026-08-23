class Solution:
    def dailyTemperatures(self, arr: List[int]) -> List[int]:
        n = len(arr)
        stack = []
        ans = [0] * n

        stack.append(n - 1)
        for i in range(n-2, -1, -1):
            while len(stack) > 0:
                top = stack[len(stack) - 1]
                if arr[top] > arr[i]:
                    ans[i] = top - i
                    break
                else:
                    stack.pop()
            stack.append(i)
        return ans