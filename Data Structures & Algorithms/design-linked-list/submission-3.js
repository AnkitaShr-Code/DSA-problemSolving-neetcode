class Node{
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        if (index <= 0 || index >= this.size) return null;

        let currNode = this.head;
        for(let i=0; i < index-1; i++) {
            currNode = currNode.next;
        }
        return currNode;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) return -1;

        if(index == 0) return this.head.val;

        let currNode = this.head;
        for(let i=0; i < index; i++) {
            currNode = currNode.next;
        }
        return currNode.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        if(!this.head) {
            this.addAtHead(val);
        } else {
            let newNode = new Node(val);
            let currNode = this.head;
            while(currNode.next){
                currNode = currNode.next;
            }
            newNode.prev = currNode;
            currNode.next = newNode;
            this.size++;
        }
        return;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if(index < 0 || index > this.size) return;

        if(index == 0) {
            this.addAtHead(val);
            return;
        }
        if(index == this.size) {
            this.addAtTail(val);
            return;
        }

        let currNode = this.head;
        for(let i=0; i<index -1; i++) {
            currNode = currNode.next;
        }
        let newNode = new Node(val);
        newNode.next = currNode.next;
        newNode.prev = currNode;
        newNode.next.prev = newNode;
        currNode.next = newNode;
        this.size++;
        return;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {

        if(index < 0 || index >= this.size) return;

        if(index == 0 ){
            let currNode = this.head;
            this.head = this.head.next;
            if(this.head) {
                this.head.prev = null;
            }
            currNode.next = null;
        }else {
            let currNode = this.head;
            for(let i=0; i < index; i++) {
                currNode = currNode.next;
            }
            if(currNode.next) {
                currNode.next.prev = currNode.prev;
            }
            if(currNode.prev) {
                currNode.prev.next = currNode.next;
            }
            currNode.next = null;
            currNode.prev = null;
        }
        this.size--;
    }
}
