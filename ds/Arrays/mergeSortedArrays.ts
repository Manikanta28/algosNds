/**
 * mergeSortedArrays([0,3,4,31], [3,4,6,30]);
 * o/p => [0,3,3,4,4,6,30,31]
 */

function mergeSortedArrays(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const finalSortedArray: Array<number> = [];
  let smallestArray;
  let biggestArray;
  if (arr1.length > arr2.length) {
    biggestArray = arr1;
    smallestArray = arr2;
  } else {
    biggestArray = arr2;
    smallestArray = arr1;
  }

  biggestArray.forEach((bigArrayItem, index) => {
    let smallArrayItem = smallestArray[index];
    if (smallArrayItem === undefined) {
      finalSortedArray.push(bigArrayItem);
    } else {
      if (bigArrayItem < smallArrayItem) {
        finalSortedArray.push(bigArrayItem, smallArrayItem);
      } else {
        finalSortedArray.push(smallArrayItem, bigArrayItem);
      }
    }
  });
  return finalSortedArray;
}
console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30, 80]));
