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
        let sentinel = new ListNode(-1);
        sentinel.next = head;

        let lead = head, trail = head;

        for(let i=0; i<n; i++) {
            lead = lead.next;
            if(!lead) 
                return head.next;
            
        }

        while(lead.next) {
            trail = trail.next;
            lead = lead.next;
        }

        trail.next = trail.next.next;
        return sentinel.next;
    }
}
