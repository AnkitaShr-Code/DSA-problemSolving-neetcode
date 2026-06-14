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
     * @param {number} k
     * @return {ListNode}
     */
    rotateRight(head, k) {
        if(!head || !head.next) 
            return head;

        let length =0;
        let curr = head;

        while (curr) {
            length++;
            curr = curr.next
        }

        k = k % length;
        let fast = head, slow = head;
        for(let i=0; i < k; i++) {
            fast = fast.next;
        }

        while(fast.next){
            slow = slow.next
            fast = fast.next
        }

        fast.next = head
        head = slow.next
        slow.next = null

        return head;
            
    }
}
