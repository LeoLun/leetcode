/// <reference types="vitest/globals" />

declare global {
  interface ListNode {
    val: number;
    next: ListNode | null;
  }

  var ListNode: {
    new (val?: number, next?: ListNode | null): ListNode;
  };

  interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }

  var TreeNode: {
    new (val?: number, left?: TreeNode | null, right?: TreeNode | null): TreeNode;
  };
}

export {};
