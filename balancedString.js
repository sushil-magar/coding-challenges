// abcabc + aabbcc should return true
// abcabc + aabbcd should return false

const str = 'abcabc';
const str2 = 'aabbcc';

const combined = (str + str2).split('');

const isBalanced = (arr) => arr.reduce((a, b) => {
  return Number.isInteger(a)
    ? a ^ b.charCodeAt()
    : a.charCodeAt() ^ b.charCodeAt();
});

console.log(isBalanced(combined));

// const data = [1, 1, 2, 1, 2, 3, 1, 5, 6, 3];

// console.log( data.reduce((a, b) => a ^ b));