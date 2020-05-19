const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array: Array<number>) {
  for (let i = 0; i < numbers.length; i++) {
    let smallestNumber = numbers[i];
    let smalletNumberIndex = i;
    for (let j = i; j < numbers.length; j++) {
      let currentNumber = numbers[j];
      if (currentNumber < smallestNumber) {
        smallestNumber = currentNumber;
        smalletNumberIndex = j;
      }
    }
    numbers.splice(smalletNumberIndex, 1); //removing the smallest element
    numbers.splice(i, 0, smallestNumber); //inserting into the array
  }
  return numbers;
}

selectionSort(numbers);
