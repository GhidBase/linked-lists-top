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
}

const mainList = new LinkedList();
mainList.append("hi");
mainList.append("hi2");
console.log(mainList.tail.value);
console.log(mainList.head.value);

// Each nextNode will be referential
