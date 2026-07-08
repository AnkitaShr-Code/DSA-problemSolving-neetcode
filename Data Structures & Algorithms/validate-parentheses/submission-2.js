class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stackArr = [];
        for(let i =0; i < s.length; i++) {
            let ch = s[i];
            switch(ch) {
                    case '(':
                            stackArr.push(')');
                            break;
                    case '{':
                            stackArr.push('}');
                            break;

                    case '[':
                            stackArr.push(']');
                            break;
                    default:
                        if(ch !== stackArr.pop()){
                            return false
                        }
                        break;
                }

            
        }

        return stackArr.length == 0;
    }
}
