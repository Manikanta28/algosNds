class StackArray {
  stack: Array<any>;
  constructor() {
    this.stack = [];
  }
  peek() {
    //see top node
    return this.stack[this.stack.length - 1];
  }
  push(value: any) {
    //add node to top of stack
    this.stack.push(value);
    return this;
  }
  pop() {
    //remove node from top of stack
    return this.stack.splice(-1);
  }
}

const myStackArray = new StackArray();
