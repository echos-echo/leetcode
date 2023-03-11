/*
 Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 */

/**
 * given the root of a binary tree with exactly 3 nodes (root, left, right),
 * return a boolean representing whether the root is the sum of the child nodes
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function(root) {
    return root.val === root.left.val + root.right.val ? true : false;
};

// performance notes:
// - mediocre runtime, but seems to vary
// - mediocre memory use, but seems to vary
