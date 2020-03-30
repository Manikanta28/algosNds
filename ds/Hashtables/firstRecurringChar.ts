//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

function getFirstRecurringCharacter(numbers: Array<number>): number | undefined {
  const arrayHashMap = {};
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (arrayHashMap[number]) {
      return number;
    }
    arrayHashMap[number] = true;
  }
}

console.log(getFirstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); //2
console.log(getFirstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); //1
console.log(getFirstRecurringCharacter([2, 3, 4, 5])); //undefined
console.log(getFirstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4])); //5
