function reverseString(input) {
  return str.split('').reverse().join('');
}

function reverseStringWithoutReverse(str) {
  let result = '';

  for(let i  = str.length - 1; i >= 0; i--) {
    result += str[i];  
  }

  return result;
}

function reverseRecursively(input) {
  if (input <= 1) {
    return input;
  }

  return reverseRecursively(input.substr(1, input.length - 1)) + input.charAt(0);
}

let str = 'sushil';
console.log(reverseString(str));
console.log(reverseStringWithoutReverse(str));
console.log(reverseRecursively(str));