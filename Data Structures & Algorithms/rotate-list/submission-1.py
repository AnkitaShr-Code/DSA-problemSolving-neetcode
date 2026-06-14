# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        length = 0
        curr = head
        while curr:
            length += 1
            curr = curr.next

        k = k % length
        slow, fast = head, head

        for _ in range(k):
            fast = fast.next

        while fast.next:
            slow = slow.next
            fast = fast.next

        fast.next = head
        head = slow.next
        slow.next = None
        return head
        