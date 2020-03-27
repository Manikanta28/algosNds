/**
 * Input: Hi my name is mani
 * Output: inam si eman ym iH
 */

function reverse1(str: string): string {
  const stringLength: number = str.length;
  const backWardArray: Array<string> = [];
  for (let i = stringLength - 1; i >= 0; i--) {
    const element = str[i];
    backWardArray.push(element);
  }
  return backWardArray.join('');
}
function reverse2(str: string): string {
  return str
    .split('')
    .reverse()
    .join('');
}

const reverse3 = (str: string): string => {
  return [...str].reverse().join('');
};

let testString = 'Hi my name is mani';
console.log(reverse3(testString));
