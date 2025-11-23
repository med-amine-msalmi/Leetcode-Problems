 
 
    
     class ListNode {
         val: number
         next: ListNode | null
         constructor(val?: number, next?: ListNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.next = (next===undefined ? null : next)
         }
     }
   
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
    let dummyHead=new ListNode();
    let current1=list1;
    let current2=list2; 
    let current=dummyHead;
    while(current1 != null && current2 != null){
        if(current1.val < current2.val){
            current.next=current1;
            current1=current1.next;
        }
        else{
            current.next=current2;
            current2=current2.next;
        }
        current=current.next;
    }
    if(current1==null){
        current.next=current2;
    }
    else if(current2==null){
        current.next=current1;
    }
    return dummyHead.next;
};