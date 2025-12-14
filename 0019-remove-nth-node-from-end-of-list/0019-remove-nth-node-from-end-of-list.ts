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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let current:ListNode=head;
    let Stack:ListNode[]=[];
    let length=0;
    let index=1;
    while(current!=null){
        Stack.push(current);
        current=current.next;
        length++;
    }
    if(length==n)
        return head.next;
    
    let prevnode=Stack[Stack.length-n-1]
    prevnode.next=prevnode.next.next;
    return head;

};