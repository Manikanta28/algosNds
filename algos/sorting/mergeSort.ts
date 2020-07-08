function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: Array<number>, right: Array<number>) {
  const result: Array<number> = [];
  let leftIndex: number = 0;
  let rightIndex: number = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
console.log(answer);
// function mergeSort(array: Array<number>) {
//   if (array.length === 1) {
//     return array;
//   }
//   // Split Array in into right and left

//   let rightPart = array.splice(array.length / 2);

//   return merge(mergeSort(array), mergeSort(rightPart));
// }

// function merge(left: Array<number>, right: Array<number>) {
//   let sortedArray: Array<number> = [];
//   let copyOfRightArray = [...right];
//   let tempJ = 0;

//   for (let i = 0; i < left.length; i++) {
//     const leftElement = left[i];
//     if (right.length === 0) {
//       sortedArray.push(leftElement);
//     }
//     for (let j = 0; j < right.length; j++) {
//       const rightElement = right[j];
//       if (leftElement < rightElement) {
//         sortedArray.push(leftElement);
//         right = copyOfRightArray;
//         break;
//       } else {
//         copyOfRightArray.splice(j - tempJ, 1);
//         tempJ = tempJ + 1;
//         sortedArray.push(rightElement);
//         if (j === right.length - 1) {
//           //last element in array then push inside
//           sortedArray.push(leftElement);
//         }
//       }
//     }
//   }

//   return [...sortedArray, ...copyOfRightArray];
// }

// var answer = mergeSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
// console.log(answer);
