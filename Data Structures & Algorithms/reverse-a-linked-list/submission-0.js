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
    reverseList(head) {
        let prev = null, currNode = head;

        while (currNode) {
            let temp = currNode.next;
            currNode.next = prev;
            prev = currNode;
            currNode = temp;
        }
        return prev;
    }
}
