// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n: number): number {
  let arrayOfFiboacci: Array<number> = [0, 1, 1];
  if (n <= 2) {
    return arrayOfFiboacci[n];
  }
  for (let i = 0; i <= n - 3; i++) {
    const lastElemOfArray: number = arrayOfFiboacci[arrayOfFiboacci.length - 1] || 0;
    const lastButElemOfArray: number = arrayOfFiboacci[arrayOfFiboacci.length - 2] || 0;
    // arrayOfFiboacci.push(i + lastElemOfArray);
    arrayOfFiboacci.push(lastElemOfArray + lastButElemOfArray);
  }
  return arrayOfFiboacci[arrayOfFiboacci.length - 1];
}
fibonacciIterative(3);

function fibonacciRecursive(n: number) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

fibonacciRecursive(3);
