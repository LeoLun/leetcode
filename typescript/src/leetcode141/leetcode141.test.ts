import hasCycle from './leetcode141';

test('hasCycle', () => {
  const node1 = new ListNode(3);
  const node2 = new ListNode(2);
  const node3 = new ListNode(0);
  const node4 = new ListNode(4);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node2;
  expect(hasCycle(node1)).toEqual(true);

  const node5 = new ListNode(1);
  const node6 = new ListNode(2);
  node5.next = node6;
  node6.next = node5;
  expect(hasCycle(node5)).toEqual(true);

  const node7 = new ListNode(1);
  expect(hasCycle(node7)).toEqual(false);
});
