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
}
