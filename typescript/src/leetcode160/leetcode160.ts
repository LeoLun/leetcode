/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  type TagListNode = ListNode & { tag?: Boolean };

  let currentA = headA as TagListNode;
  let currentB = headB as TagListNode;

  while (currentA || currentB) {
    if (currentA && currentA.tag) {
      return currentA;
    }

    if (currentA) {
      currentA.tag = true;
      currentA = currentA.next as TagListNode;
    }

    if (currentB && currentB.tag) {
      return currentB;
    }

    if (currentB) {
      currentB.tag = true;
      currentB = currentB.next as TagListNode;
    }
  }

  return null;
}

export default getIntersectionNode;
