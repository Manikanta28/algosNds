function insertionSort(array: Array<number>) {
  let sortedArray: Array<number> = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (sortedArray.length === 0) {
      sortedArray = [element];
    } else {
      if (element > sortedArray[sortedArray.length - 1]) {
        sortedArray.push(element);
      } else {
        let isInserted = false;
        for (let j = 0; j < sortedArray.length; j++) {
          const sortedElement = sortedArray[j];

          if (element < sortedElement) {
            sortedArray.splice(j, 0, element);
            isInserted = true;
            break;
          }
        }
        if (!isInserted) {
          sortedArray.push(element);
        }
      }
    }
  }
  return sortedArray;
}

insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
