class Node:
    def __init__(self, key: int, value: int):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}

        self.head = Node(-1, -1)
        self.tail = Node(-1, -1)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _addNode(self, node: Node) -> None:
        node.next = self.head.next
        node.prev = self.head

        self.head.next.prev = node
        self.head.next = node

    def _removeNode(self, node: Node) -> None:
        node.next.prev = node.prev
        node.prev.next = node.next
    
    def _addToFront(self, node: Node) -> None:
        self._removeNode(node)
        self._addNode(node)

    def _removeFromTail(self) -> Node:
        node = self.tail.prev
        self._removeNode(node)
        return node
    
    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        
        node = self.cache[key]
        self._addToFront(node)
        return node.value
        

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.value = value
            self._addToFront(node)
            return
        
        newNode = Node(key, value)
        self._addNode(newNode)
        self.cache[key]= newNode

        if len(self.cache) > self.capacity:
            lru = self._removeFromTail()
            del self.cache[lru.key]
        
