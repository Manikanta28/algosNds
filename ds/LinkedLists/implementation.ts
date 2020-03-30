interface node {
  value: any;
  next: null | node;
}

class LinkedList {
  length: number;
  head: node;
  tail: node;
  constructor(value: any) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  public append(value) {
    let currenHead: node = this.head;
    while (currenHead.next !== null) {
      currenHead = currenHead.next;
    }
    currenHead.next = {
      value,
      next: null
    };
    this.tail = currenHead.next;
    this.length++;
  }
}

var myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
console.log(myLinkedList);
