class Node {
  constructor(value = null, nextNode = null) {
    (this.value = value), (this.nextNode = nextNode);
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    (this.head = head), (this.tail = tail);
  }

  append(value) {
    let newNode = new Node(value);
    if (this.tail) {
      this.tail.nextNode = newNode;
    } else {
      /*
      I assume that if there's no head there's also
      no tail. I'll need to set both values on the first
      append
      */
      this.head = newNode;
    }
    this.tail = newNode;
  }

  prepend(value) {
    let newNode = new Node(value);
    /*
    If there's already a head node, that will be the
    nextNode of this new Node
    Make sure to set the nextNode before changing the
    head attribute of the current linkedList
    */
    if (this.head) {
      newNode.nextNode = this.head;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }
}

const mainList = new LinkedList();
mainList.append("hi");
mainList.append("hi2");

console.clear();
console.log(mainList.head.value);
console.log(mainList.head.nextNode);
console.log(mainList.tail.value);
console.log(mainList.tail.nextNode);

// Each nextNode will be referential
