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
    while(Stack.length!=0){
        if(index==n){
            let node=Stack.pop();
            Stack.pop().next=node.next;
        }
        Stack.pop();
        index++;
    }
    return head;

};