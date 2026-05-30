/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    middleNode(head: ListNode | null): ListNode {
        let fast: ListNode | null = head;
        let slow: ListNode | null = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;

        }
        return slow;
    }
}
