/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * given a head of a singly linked list, return the middle node.
 * if there are two middle nodes, return the second one
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let currentNode = head;
    let middleNode = head;
    let inc = true;
    while(currentNode !== null) {
        if (!inc) {
            middleNode = middleNode.next;
            inc = true;
        } else {
            inc = false;
        }
        currentNode = currentNode.next;
    }
    return middleNode;
};

// performance notes:
// excellent runtime
// memory usage tends to vary