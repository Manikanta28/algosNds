//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str: string): string {
  //str.split("").reverse().join("");
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse;
}
function reverseStringRecursively(str: string): string {
  if (str === '') {
    return '';
  } else {
    return reverseStringRecursively(str.substr(1)) + str.charAt(0);
  }
}

reverseString('yoyo mastery');
reverseStringRecursively('yoyo mastery');
//should return: 'yretsam oyoy'
