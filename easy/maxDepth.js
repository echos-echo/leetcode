/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * given the root node of a binary tree
 * find the maximum depth of the tree
 * - not guaranteed to be complete or balanced
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // recursive:
    // keeps calling until we hit a null (end of a branch)
    // -> end of branch return zero
    // -> add 1 to each recursive call
    let left = 0, right = 0;
    // if the root is null -> end branch
    if (!root) return 0;
    // if root is not null, call with left, call with right (save the returns)
    left = 1 + maxDepth(root.left);
    right = 1 + maxDepth(root.right);
    // compare the numbers that calling it on the left and right nodes returns
    // return whichever is greater -> path to deepest node (from the current root)
    return left > right ? left : right;
  };
  // O(n) time, O(n) space