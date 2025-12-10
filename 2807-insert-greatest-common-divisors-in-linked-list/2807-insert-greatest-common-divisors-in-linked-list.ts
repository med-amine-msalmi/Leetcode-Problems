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
        const max=Math.max(num1,num2);
        const min=Math.min(num1,num2);
        if(max%min==0)
            return min;
        return gcd(min,max%min);
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