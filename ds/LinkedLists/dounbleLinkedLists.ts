interface doubleNode {
  value: any;
  next: null | doubleNode;
  prev: null | doubleNode;
}

class DoubleLinkedList {
  length: number;
  head: doubleNode;
  tail: doubleNode;
  constructor(value: any) {
    this.head = {
      value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  private newNode(value: any): doubleNode {
    return {
      value,
      next: null,
      prev: null
    };
  }
  public printList() {
    let arr: Array<any> = [];
    let currentHead: doubleNode | null = this.head;
    while (currentHead !== null) {
      arr.push(currentHead.value);
      currentHead = currentHead.next;
    }
    console.log(arr);
  }
  private traverseToIndex(index: number) {
    let counter: number;
    let myIndexHead: doubleNode;
    if (index > this.length / 2) {
      //search bacwards
      console.log('Tailing');
      counter = this.length - 1;
      myIndexHead = this.tail;
      while (counter > index && myIndexHead.prev !== null) {
        myIndexHead = myIndexHead.prev;
        counter--;
      }
    } else {
      // search forwards
      console.log('Heading');
      counter = 0;
      myIndexHead = this.head;
      while (counter < index && myIndexHead.next !== null) {
        myIndexHead = myIndexHead.next;
        counter++;
      }
    }
    return myIndexHead;
  }
  public append(value: any): doubleNode {
    //adding ending to the list
    let newNode = this.newNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return newNode;
  }
  public prepend(value: any): doubleNode {
    //adding before the head
    let newNode = this.newNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return newNode;
  }
  public insert(index: number, value: any): doubleNode {
    //CHECK edge cases 0 and length ()
    const newNode = this.newNode(value);
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    }

    let leader: doubleNode = this.traverseToIndex(index - 1);
    if (leader.next) leader.next.prev = newNode;
    newNode.next = leader.next;
    newNode.prev = leader;
    leader.next = newNode;
    this.length++;
    return newNode;
  }
  public remove(index: number) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    if (unwantedNode) {
      leader.next = unwantedNode.next;
      if (unwantedNode.next) {
        unwantedNode.next.prev = leader;
        this.length--;
      }
    }
  }
}

var myDoubleLinkedList = new DoubleLinkedList(0);
