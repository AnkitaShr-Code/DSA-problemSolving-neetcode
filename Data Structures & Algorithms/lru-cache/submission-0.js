class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.items.get(key)) return -1;
        let val = this.items.get(key);
        this.items.delete(key);
        this.items.set(key, val);
        return val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.items.delete(key);
        this.items.set(key, value);
        if(this.capacity < this.items.size) {
            for(const headKey of this.items.keys()) {
                this.items.delete(headKey);
                break;
            }
        }
    }
}
