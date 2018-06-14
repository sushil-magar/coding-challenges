// 'abcabc', 'aabbcc' => true
// 'abcabc', 'aabbcd' => false
// 'aab', 'abb' => false


function findBoolean(str1, str2) {
  let obj = {};

  for (let i = 0; i < str1.length; i++) {
    if (!obj[str1[i]]) {
      let count = 1;
      obj[str1[i]] = count;
    } else {
      let currentCount = obj[str1[i]];
      obj[str1[i]] =  currentCount + 1;
    }
  }
  const size = str2.length;

  console.log(obj);
}

const string1 = 'abcabc';
const string2 = 'aabbcc';

console.log(findBoolean(string1, string2));

