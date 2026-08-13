class Node {
    constructor(k, v) {
        this.key = k;
        this.value = v;
        this.prev = null;
        this.next = null;
    }
}
class LRUCache {

    /**
     * @param {number} capacity
     */
    constructor(capacity) {
       this.capacity = capacity;
       this.cache = new Map();

       this.head = new Node(0, 0);
       this.tail = new Node(0, 0);

       this.head.next = this.tail;
       this.tail.prev = this.head;
    }

    add(node) {
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    moveToHead(node) {
        this.remove(node);
        this.add(node);
    }
    
    removeFromTail() {
        const node = this.tail.prev;
        this.remove(node);
        return node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) {
            return -1;
        }

        const node = this.cache.get(key);
        this.moveToHead(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;
            this.moveToHead(node);
            return;
        }
        const node = new Node(key, value);
        this.cache.set(key, node);
        this.add(node);

        if(this.cache.size > this.capacity) {
            const lru = this.removeFromTail();
            this.cache.delete(lru.key);
        }
    }
}
