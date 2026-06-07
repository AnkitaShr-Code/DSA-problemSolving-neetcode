# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        sentinel = ListNode()
        sentinel.next = head
        length = 0
        while head:
            length += 1
            head = head.next

        prevPos = length - n
        prev = sentinel
        for _ in range(prevPos):
            prev = prev.next

        prev.next = prev.next.next
        return sentinel.next
        