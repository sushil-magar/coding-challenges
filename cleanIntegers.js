/*
Example 1:

Input: "42"
Output: 42
Example 2:

Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
Example 3:

Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
Example 4:

Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical 
             digit or a +/- sign. Therefore no valid conversion could be performed.
Example 5:

Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  if (str[0].match(/[a-z]/)) {
    return 0;
  }

  const cleanedNumber = str.trim().split('');
  let newArr = [];

  cleanedNumber.forEach((char) => {
      const character = char.match(/[\+\-\.0-9]/gm);
      
      if (character) {
          newArr += character;
      }
  });

  if (Number(newArr) < (Math.pow(2, 31) * -1)) {
    return Math.pow(2, 31) * -1;
  }
  
  console.log(Number(newArr));
};

const input = "3.14232";
console.log(myAtoi(input));