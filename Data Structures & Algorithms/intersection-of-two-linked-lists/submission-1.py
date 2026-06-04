# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        currB, hmB = headB, set()

        while currB:
            hmB.add(currB)
            currB = currB.next

        currA = headA
        while currA:
            if currA in hmB:
                return currA

            currA = currA.next

        return None
        