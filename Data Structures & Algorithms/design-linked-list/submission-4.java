class Node {
    int val;
    Node next;
    public Node(int val){
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    Node head;
    int size;

    public MyLinkedList() {
        this.head = null;
        this.size = 0;
    }
    
    public int get(int index) {
        if (index < 0 || index >= this.size)
            return -1;

        Node currNode = this.head;
        for(int i=0; i<index; i++) {
            currNode = currNode.next;
        }
        return currNode.val;
    }

    
    public void addAtHead(int val) {
        Node newNode = new Node(val);

        newNode.next = this.head;
        this.head = newNode;
        
        this.size++;
    }
    
    public void addAtTail(int val) {
        Node newNode = new Node(val);

        if(this.head == null) {
            this.head = newNode;
        } else {
            Node currNode = this.head;
            while (currNode.next != null) {
                currNode = currNode.next;
            }
            currNode.next = newNode;
        }
        this.size++;
        
    }
    
    public void addAtIndex(int index, int val) {
        if(index < 0 || index > this.size) return;

        if(index == 0) {
            this.addAtHead(val);
            return;
        }

        if(index == this.size) {
            this.addAtTail(val);
            return;
        }
        
        Node newNode = new Node(val);
        Node currNode = this.head;
        for(int i=0; i < index-1; i++) {
            currNode = currNode.next;
        }

        newNode.next = currNode.next;
        currNode.next = newNode;
        this.size++;
        return;
    }
    
    public void deleteAtIndex(int index) {
        if (index < 0 || index >= this.size ) return;

        if(index == 0) {
            Node currNode = this.head;
            this.head = this.head.next;
            currNode.next = null;
        } else {
            Node currNode = this.head;
            for(int i=0; i < index-1; i++){
                currNode = currNode.next;
            }
            currNode.next = currNode.next.next;
        }
        this.size--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */