class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        tempSet = set()
        tempSet.add("+")
        tempSet.add("-")
        tempSet.add("*")
        tempSet.add("/")

        stack = []

        for i in range(0, len(tokens)):
            if tokens[i] in tempSet:
                a = int(stack.pop())
                b = int(stack.pop())
                c = self.evaluate(a, b, tokens[i])
                stack.append(c)
            else:
                stack.append(tokens[i])

        return int(stack.pop())

    def evaluate(self, a: int, b: int, ch: str) -> int:
        match ch:
            case "+":
                return b + a
            case "-":
                return b - a
            case "*":
                return b * a
            case "/":
                return b / a
        