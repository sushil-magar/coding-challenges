'use strict';

module.exports = (inputString) => {
  if (!inputString || typeof inputString !== 'string') return `Cannot find palindrome if the input is missing.`;

  if (inputString.length === 1) return true;

  const reverse = inputString.split('').reverse().join('');
  return reverse === inputString ? true : false;
}
