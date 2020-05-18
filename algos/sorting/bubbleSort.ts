const numbersToSort = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(numbers: Array<number>) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i; j++) {
      const currentNumber = numbers[j];
      const nextNumber = numbers[j + 1];
      if (nextNumber != undefined) {
        if (currentNumber > nextNumber) {
          numbers[j] = nextNumber;
          numbers[j + 1] = currentNumber;
        }
      }
    }
  }
  return numbers;
}

bubbleSort(numbersToSort);
console.log(numbersToSort);
