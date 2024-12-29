const linkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  }
}

const reverseLinkedList = (linkedList) => {
  let prev = null;
  let current = linkedList.head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  linkedList.head = prev;
  return linkedList;
}

console.log(reverseLinkedList(linkedList));
