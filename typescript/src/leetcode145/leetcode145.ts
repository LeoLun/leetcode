function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) {
    return result;
  }

  const stack: TreeNode[] = [root];
  while (stack.length) {
    const current = stack.pop();
    if (current && current.val !== null) {
      result.push(current.val);
    }
    if (current?.left) {
      stack.push(current.left);
    }
    if (current?.right) {
      stack.push(current.right);
    }
  }
  result.reverse();
  return result;
}

export default postorderTraversal;
