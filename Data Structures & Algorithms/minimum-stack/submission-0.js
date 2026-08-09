class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length == 0) {
            this.stack.push({val: val, minVal: val});
        } else {
            let topEle = this.stack[this.stack.length -1];
            this.stack.push({val: val, minVal: Math.min(val, topEle.minVal)});
        }
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1].val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length-1].minVal;
    }
}
