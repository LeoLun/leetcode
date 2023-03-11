function preorderTraversal(root: TreeNode | null): number[] {
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
    if (current?.right) {
      stack.push(current.right);
    }
    if (current?.left) {
      stack.push(current.left);
    }
  }
  return result;
}

export default preorderTraversal;
