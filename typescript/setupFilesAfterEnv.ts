class TestListNode {
  val: number;

  next: TestListNode | null;

  constructor(val?: number, next?: TestListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class TestTreeNode {
  val: number;

  left: TestTreeNode | null;

  right: TestTreeNode | null;

  constructor(val?: number, left?: TestTreeNode | null, right?: TestTreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

globalThis.ListNode = TestListNode;
globalThis.TreeNode = TestTreeNode;
