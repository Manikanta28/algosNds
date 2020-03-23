class MyArray {
  length: number;
  data: object;
  constructor() {
    this.length = 0;
    this.data = {};
  }
  public get(index: number): any {
    return this.data[index];
  }
  public push(item: any): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  public pop(): any {
    let lastItem;
    if (this.length !== 0) {
      lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
    }
    return lastItem;
  }
  public delete(index: number): any {
    let item = this.data[index];
    if (index < this.length) {
      this.shiftItems(index);
    }

    return item;
  }
  private shiftItems(index: number) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.pop();
  }
}

// const test = new MyArray();
// test.push('a');
// test.push('b');
// test.push('c');
// test.push('d');
// test.push('e');
// test.delete(2);
// console.log(test);
