/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func removeElements(head *ListNode, val int) *ListNode {
    sentinel := ListNode{
        Val: 0,
        Next: nil,
    }
    sentinel.Next = head;

    prev := &sentinel;

    for prev != nil  && prev.Next != nil {
        if prev.Next.Val == val {
            prev.Next = prev.Next.Next;
        } else {
            prev = prev.Next;
        }
    }
    return sentinel.Next;
}
