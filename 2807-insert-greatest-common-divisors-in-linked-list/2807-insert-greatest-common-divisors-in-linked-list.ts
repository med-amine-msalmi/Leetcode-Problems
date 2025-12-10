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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    //helper function 
    function gcd(num1:number,num2:number){
        
        if(num2==0)
            return num1;
        return gcd(num2,num1%num2);
    }
    if(!head)
        return head;
    let prev=head;
    let current=prev.next;
    while(current!=null){
        const insertedNode=new ListNode(gcd(prev.val,current.val),current);
        prev.next=insertedNode;
        prev=current;
        current=current.next;
    }
    return head;
};