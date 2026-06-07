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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let sentinel = new ListNode();
        sentinel.next = head;
        let length =0;

        while(head) {
            length++;
            head = head.next;
        }

        let prevPos = length - n;
        let prev = sentinel;
        for (let i=0; i< prevPos; i++) {
            prev = prev.next;
        }
        prev.next = prev.next.next;
        return sentinel.next;
        
    }
}
