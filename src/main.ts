class Node {
  value: any;
  nextNode: Node | null;

  constructor(value: any = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  append(value: any) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.nextNode !== null) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
  }

  prepend(value: any) {
    const node = new Node(value);
    node.nextNode = this.head;
    this.head = node;
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }

    return count;
  }
}
