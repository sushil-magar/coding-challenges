function isBalanced(inputString){
  const input = inputString.match(/[(){}[\]]/g).join('');
  let result = [];

  if (input.length % 2 !== 0) {
    return false;
  }

  for(let i = 0; i < input.length; i++) {
    if (openBracket(input[i])) {
      result.push(input[i]);
    } else {
      const lastItem = result.pop();

      if(lastItem !== getMapping(input[i])) {
        return false;
      }
    }
  }

  const isBalancedBrackets = result.length ? false : true;
  return isBalancedBrackets;
}

function getMapping(char) {
  const mapping = {')' : '(', '}' : '{', ']' : '['};
  return mapping[char];
}

function openBracket(char) {
  const acceptableOpenBrackets = '{([';
  return acceptableOpenBrackets.includes(char);
}

const str = '(';

console.log(isBalanced(str));