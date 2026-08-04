class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = {'{': '}', '(': ')', '[': ']'}

        for ch in s:
            if ch in pairs:
                stack.append(ch)
            else:
                if not stack:
                    return False
                top = stack.pop()
                if ch != pairs[top]:
                    return False 
        return len(stack) == 0