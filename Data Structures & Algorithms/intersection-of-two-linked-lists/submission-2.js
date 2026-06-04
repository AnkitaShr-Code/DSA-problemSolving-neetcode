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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        let currB = headB, hmB = new Set();

        while(currB) {
            hmB.add(currB);
            currB = currB.next;
        }

        let currA = headA;
        while(currA){
            if(hmB.has(currA)){
                return currA;
            }
            currA = currA.next;
        }

        return null;
    }
}
