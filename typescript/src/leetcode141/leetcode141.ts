function hasCycle(head: ListNode | null): boolean {
  type TagListNode = ListNode & { tag?: Boolean };

  if (!head) {
    return false;
  }
  let current: TagListNode = head;
  while (current) {
    current = current as TagListNode;
    if (current.tag) {
      return true;
    }
    current.tag = true;
    current = current.next as TagListNode;
  }
  return false;
}

export default hasCycle;
