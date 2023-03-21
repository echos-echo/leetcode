/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * given two binary trees, merge the trees such that if any nodes overlap, the merged
 * tree node in the same position will hold the sum.
 * return the result as a new merged tree
 * 
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // if one node is null, return other node (can be null as well)
    // if neither of the nodes are null, sum them and put them in place of a new node
    if (!root1) return root2;
    if (!root2) return root1;
    root1.val += root2.val;
    const mergedTree = new TreeNode(root1.val);
    mergedTree.left = mergeTrees(root1.left, root2.left);
    mergedTree.right = mergeTrees(root1.right, root2.right);
    return mergedTree;
};

/*
performance notes:
- excellent runtime
- memory could be better, but mediocre
- time complexity: O(n) ? or O(m)?
    -> trees are not guaranteed the exact same # of nodes or depth
    -> time complexity would depend on the tree with more nodes or more depth
    -> so dependent on either n or m, but don't know which one it will be...
*/
