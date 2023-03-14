/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * given the head of a linked list, remove the n-th node from the end of the list
 * and return the head
 * 
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next === null && n === 1) return null;
    let currentNode = head;
    let nodeBeforeNodeToRemove = head;
    let indexFromCurrent = 0;
    while(currentNode.next !== null) {
        currentNode = currentNode.next;
        if (indexFromCurrent < n) {
            indexFromCurrent++;
        } else {
            nodeBeforeNodeToRemove = nodeBeforeNodeToRemove.next;
        }
    }
    if (indexFromCurrent !== n) {
        return head.next;
    }
    let tempNode = nodeBeforeNodeToRemove.next ? nodeBeforeNodeToRemove.next.next : null;
    nodeBeforeNodeToRemove.next = tempNode;
    return head;
};

// performance notes:
// runtime tends to vary, average memory usage