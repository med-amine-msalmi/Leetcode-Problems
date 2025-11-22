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
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // 1. Create a dummy node to serve as the start of the merged list
    const dummyHead: ListNode = new ListNode(0); 
    // 'current' will track the tail of the merged list
    let current: ListNode = dummyHead; 
    
    // Pointers for list1 and list2
    let current1: ListNode | null = list1;
    let current2: ListNode | null = list2;

    // 2. Iterate while both lists have nodes
    while (current1 !== null && current2 !== null) {
        if (current1.val <= current2.val) {
            // Append the smaller node (from list1) to the merged list
            current.next = current1; 
            // Advance the pointer in list1
            current1 = current1.next; 
        } else {
            // Append the smaller node (from list2) to the merged list
            current.next = current2; 
            // Advance the pointer in list2
            current2 = current2.next; 
        }
        // Always advance the pointer in the merged list
        current = current.next; 
    }

    // 3. Attach the remaining nodes from the non-empty list
    // Only one of these will run (or neither if both ended at the same time)
    if (current1 !== null) {
        current.next = current1;
    } else if (current2 !== null) {
        current.next = current2;
    }

    // 4. Return the actual head of the merged list (next node after dummy)
    return dummyHead.next;
};