class HashTable {
  data: Array<any>;
  constructor(size: number) {
    this.data = new Array(size);
  }
  private _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  public set(key: string, value: any) {
    const hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
  }
  public get(key: string): any {
    const hash: number = this._hash(key);
    const pairs: Array<Array<any>> = this.data[hash];
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i];
      if (pair[0] === key) {
        return pair[1];
      }
    }
  }
  public keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result: Array<string> = [];

    this.data.forEach((memorySpace) => {
      if (memorySpace && memorySpace.length) {
        if (memorySpace.length === 1) {
          result.push(memorySpace[0][0]);
        } else {
          //there is a collision then need to loop again
          memorySpace.forEach((pair) => {
            result.push(pair[0]);
          });
        }
      }
    });
    return result;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);

console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
