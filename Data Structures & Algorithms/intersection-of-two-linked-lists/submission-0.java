/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {

        ListNode currB = headB;

        Set<ListNode> hmB = new HashSet<>();

        while(currB != null) {
            hmB.add(currB);
            currB = currB.next;
        }
        

        ListNode currA = headA;
        while(currA != null) {
            if(hmB.contains(currA))
                return currA;
            currA = currA.next;
        }
        return null;
    }
}