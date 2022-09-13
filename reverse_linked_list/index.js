/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    
    
    let current = head;
    let previous = null
    let next = null;
    
    if(head === null) return head
    
    while(current !== null){
        
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        
    }
    
    
    
    return (previous)
};


// var reverseList = function(head) {
    
    
//     let current = head;
//     let previous = null
//     let next = null;
    
//     if(head === null) return head
    
//     return reverseListRecursion(previous,current, next)
    

    
    
// };


// const reverseListRecursion = (prev, curr, next) => {
    
    
//     if(curr === null) {
//          return prev
//     }
    
//     next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
    
//     // console.log(prev, curr, next)
    
//     return reverseListRecursion(prev, curr, next)

// }



