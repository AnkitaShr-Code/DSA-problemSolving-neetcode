class LRUCache {

    class Node {
        int key, value;
        Node prev, next;
        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }
    private int capacity;
    private Map<Integer, Node> cache;
    private Node head;
    private Node tail;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        cache = new HashMap<>();
        head = new Node(-1, -1);
        tail = new Node(-1, -1);

        head.next = tail;
        tail.prev = head;
        
    }

    private void addNode(Node node) {
        node.next = head.next;
        node.prev = head;

        head.next.prev = node;
        head.next = node;
    }

    private void removeNode(Node node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }

    private void addToFront(Node node) {
        removeNode(node);
        addNode(node);
    }

    private Node removeFromTail() {
        Node node = tail.prev;
        removeNode(node);
        return node;
    }
    
    public int get(int key) {
        if(!cache.containsKey(key)) {
            return -1;
        }

        Node node = cache.get(key);
        addToFront(node);
        return node.value;
        
    }
    
    public void put(int key, int value) {
        if(cache.containsKey(key)) {
            Node node = cache.get(key);
            node.value = value;
            addToFront(node);
            return;
        }

        Node newNode = new Node(key, value);
        addNode(newNode);
        cache.put(key, newNode);

        if(cache.size() > capacity) {
            Node lru = removeFromTail();
            cache.remove(lru.key);
        }
    }
}
