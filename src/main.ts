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

  getHead() {
    return this.head;
  }

  getTail() {
    if (this.head === null) return null;

    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  at(index: number) {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === index) return current;
      count++;
      current = current.nextNode;
    }

    return null;
  }

  pop() {
    let current = this.head;

    if (current === null) return null;

    if (current.nextNode === null) {
      const tail = this.head;
      this.head = null;

      return tail;
    }

    while (current.nextNode?.nextNode !== null) {
      current = current.nextNode as Node;
    }

    const tail = current.nextNode as Node;
    current.nextNode = null;

    return tail;
  }

  contains(value: any) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) return true;

      current = current.nextNode;
    }

    return false;
  }

  find(value: any) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }

    return null;
  }

  insertAt(value: any, index: number) {
    if (index < 0 || index > this.size()) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      return this.prepend(value);
    }

    if (index === this.size()) {
      return this.append(value);
    }

    const node = new Node(value);
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentNode = currentNode?.nextNode as Node;
      currentIndex++;
    }

    node.nextNode = currentNode?.nextNode as Node;
    (currentNode as Node).nextNode = node;
  }

  removeAt(index: number) {
    let current = this.head;

    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      current = current?.nextNode as Node;

      return;
    }

    let count = 0;

    while (count < index - 1) {
      current = current?.nextNode as Node;
      count++;
    }

    if (current && current.nextNode) {
      current.nextNode = current.nextNode.nextNode;
    }
  }

  toString() {
    let result = [];
    let current = this.head;

    while (current !== null) {
      result.push(`( ${current.value} )`);
      current = current.nextNode;
    }

    result.push("null");

    return result.join(" -> ");
  }
}
