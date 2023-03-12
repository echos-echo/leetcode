/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * given the heads of two sorted linked lists, merge them so that they are merged in order
 * return should be the head of the linked list
 * 
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (typeof list1 === 'null' || list1 === null) {
        return list2;
    } else if (typeof list2 === 'null' || list2 === null) {
        return list1;
    }
    let list1Less = list1?.val < list2?.val;
    if (list1Less && list1) {
        let tempList1Next = list1.next;
        list1.next = list2;
        if (tempList1Next) list1.next = mergeTwoLists(tempList1Next, list2);
    } else if (!list1Less && list2) {
        let tempList2Next = list2.next;
        list2.next = list1;
        if (tempList2Next) list2.next = mergeTwoLists(tempList2Next, list1);
    }
    return list1Less ? list1 : list2;
}

// performance notes:
// - runtime and memory both okay
// - O(log n + m) time complexity (?)