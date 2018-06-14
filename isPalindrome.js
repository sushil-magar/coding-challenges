function isPalindrome(input) {
  const cleanedInput = str.toLowerCase().match(/[a-zA-Z]/g).join('');
  const reversedInput = cleanedInput.split('').reverse().join('');
  console.log(reversedInput)
  console.log(cleanedInput)

  const isPalindromeString = cleanedInput === reversedInput ? true : false;
  return isPalindromeString;
}

const str = 'Ah, Satan sees Natasha';
console.log(isPalindrome(str));