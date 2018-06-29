function findLongestPalindrome(word) {
  if (!word || word.length === 2) {
    return `Cannot find palindrom in the word: ${word}`;
  }

  if (word.length === 1) {
    return word;
  }

  const arr = [];
  let temp = '';

  for(let i = 0; i < word.length; i++) {
    temp += word[i];

    if (temp.length > 2 && temp.split('').reverse().join('') === temp) {
      arr.push(temp);
      temp = '';
    }
  }

  if (!arr.length) {
    return `Did not find palindrom at all.`
  }

  let longestItems;
  let longest = 0;

  arr.forEach((item) => {
    if (item.length > longest) {
      longest = item.length;
      longestItems = item;
    } else if (item.length === longest){
      longestItems = [longestItems, item];
    }
  });

  return longestItems;
}

const input = "cbbd";
console.log(findLongestPalindrome(input));



// var longestPalindrome = function(s) {
//   const isPalindrome = (str) => str.split('').reverse().join('') === str;
  
//   if (s.length === 1) {
//     return s;
//   }

//   if (s.length === 2 && isPalindrome(s)) {
//     return s;
//   }

//   let max = 0;
//   let result = '';

//   for (let i = 0, j = 0; i < s.length; i++) {
//     let str = s.substr(j, i + 1);

//     if (isPalindrome(str)) {
//       max = str.length;
//       result = str;
//     } else {

//     }
//   }
// };

// console.log(longestPalindrome('babad'));