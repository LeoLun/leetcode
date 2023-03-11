import preorderTraversal from './leetcode144';

test('preorderTraversal', () => {
  const treeNode1 = new TreeNode(1);
  const treeNode2 = new TreeNode(2);
  const treeNode3 = new TreeNode(3);
  treeNode1.right = treeNode2;
  treeNode2.left = treeNode3;
  expect(preorderTraversal(treeNode1)).toEqual([1, 2, 3]);

  expect(preorderTraversal(null)).toEqual([]);

  const treeNode4 = new TreeNode(1);
  expect(preorderTraversal(treeNode4)).toEqual([1]);

  const treeNode31 = new TreeNode(1);
  const treeNode32 = new TreeNode(2);
  const treeNode33 = new TreeNode(3);
  const treeNode34 = new TreeNode(4);
  const treeNode35 = new TreeNode(5);
  const treeNode36 = new TreeNode(6);

  treeNode31.left = treeNode32;
  treeNode31.right = treeNode33;
  treeNode32.left = treeNode34;
  treeNode32.right = treeNode35;
  treeNode33.left = treeNode36;
  expect(preorderTraversal(treeNode31)).toEqual([1, 2, 4, 5, 3, 6]);

  const treeNode41 = new TreeNode(0);
  const treeNode42 = new TreeNode(2);
  const treeNode43 = new TreeNode(3);
  treeNode41.right = treeNode42;
  treeNode42.left = treeNode43;
  expect(preorderTraversal(treeNode41)).toEqual([0, 2, 3]);
});
