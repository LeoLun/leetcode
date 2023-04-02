import getIntersectionNode from './leetcode160';

test('getIntersectionNode', () => {
  const node1 = new ListNode(4);
  const node2 = new ListNode(1);
  const node3 = new ListNode(8);
  const node4 = new ListNode(4);
  const node5 = new ListNode(5);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;

  const node6 = new ListNode(5);
  const node7 = new ListNode(6);
  const node8 = new ListNode(1);
  node6.next = node7;
  node7.next = node8;
  node8.next = node3;
  expect(getIntersectionNode(node1, node6)).toEqual(node3);
});
