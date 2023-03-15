/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * given the root of a binary tree, check if it is a complete tree
 * - every level except leaves are completely filled
 * - all leaves are in leftmost nodes possible
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    // create a queue to store nodes, starting with the root
    const queue = [root];

    // so long as the next node up in the queue exists...
    while (queue[0] !== null) {
        // move the first node out so we can check it!
        const node = queue.shift();
        // move the left and right nodes of the node we just checked, into the end of the queue
        queue.push(node.left, node.right);
    }
    // all valid nodes should have been processed by this point
    // if there is a node that was not processed, that means it was either
    // not in the leftmost position, or not a complete level of the tree
    // using findIndex we can see if there are any spots in the queue that are not null
    // if we find a node that is not null, that means a node was not processed
    return !(queue.findIndex(thing => thing !== null) > -1);
}

// performance notes:
// excellent runtime and great memory usage