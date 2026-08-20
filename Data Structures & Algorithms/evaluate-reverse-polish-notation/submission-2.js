class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let map = {
            '+': '+',
            '-': '-',
            '*': '*',
            '/': '/'
        }
        let stack = [];

        for(let i=0; i<tokens.length; i++) {
            if(map.hasOwnProperty(tokens[i])) {
                let a = stack.pop();
                let b = stack.pop();
                let c = this.evaluate(a, b, tokens[i]);
                stack.push(Math.trunc(c));
            } else {
                stack.push(tokens[i]);
            }
        }
        return Number(stack.pop())
    }

    evaluate(a, b, ops) {
        a = Number(a);
        b = Number(b);
        switch(ops) {
            case '+':
                return b + a
            case '-':
                return b - a
            case '*': 
                return b * a
            case '/':
                return b / a
        }
    }
}
