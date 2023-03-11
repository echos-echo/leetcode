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
 * @return {string}
 */
var tree2str = function(root) {
    if (!root.left && !root.right) {
        return `${root.val}`;
    } else if (root.left && !root.right) {
        return `${root.val}(${tree2str(root.left)})`;
    }else if (!root.left && root.right) {
        return `${root.val}()(${tree2str(root.right)})`;
    } else {
        return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
    }
};