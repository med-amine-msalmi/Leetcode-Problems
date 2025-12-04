/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let dummyHead:ListNode=new ListNode(0,head);
    let prev=dummyHead;
    let current=head;
    while(current!=null){
        if(current.val!==val){
            prev.next=current;
            prev=current;
        }
        else
            prev.next=current.next;
        current=current.next;
    }

    return dummyHead.next;
};