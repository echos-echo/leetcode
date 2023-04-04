/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // breadth first: [4, 2, 7, 1, 3, 6, 9]
    // [4] -> [4]
    // [2, 7] -> [7, 2]
    // [1, 3, 6, 9] -> [9, 6, 3, 1]
  
    // recursive solution:
    // declare temporary variables for left and right;
    // temporary variable would represent the inverted left and right nodes
    if (!root) return root;
    let invertedLeft = null, invertedRight = null;
    // if there is a left, call the function on left as root
    // call the function with root.left -> invertTree(root.left);
    if (root.left) {
      invertedLeft = invertTree(root.left);
    }
    // if there is a right, call the function on the right as root
    // call the function with root.right -> invertTree(root.right);
    if (root.right) {
      invertedRight = invertTree(root.right);
    }
    
    // last: swap the left and right of the current root
    // set the right branch to the temporary left node
    // set the left branch to the temporary right node
    root.left = invertedRight;
    root.right = invertedLeft;
    // return the root node
    return root;
  };