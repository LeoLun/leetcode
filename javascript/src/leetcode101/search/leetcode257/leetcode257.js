/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root || root.val) {
    return []
  }
  const result = []
  const path = [root.val]
  dfs(result, root, path)
  return result
}

var dfs = function (result, root, path) {
  if (!root.left && !root.right) {
    result.push(path.join('->'))
    return
  }

  if (root.left) {
    path.push(root.left.val)
    dfs(result, root.left, path)
    path.pop()
  }

  if (root.right) {
    path.push(root.right.val)
    dfs(result, root.right, path)
    path.pop()
  }
}

export default binaryTreePaths
