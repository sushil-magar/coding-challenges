/**
 * Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

 function findLongestSubstring(str){
   let map = new Map();
   let maxSubstringSize = 0;

   for (let j = 0, i =0; j < str.length; j++) {
     if (map.has(str[i])) {
       i = Math.max(map.get(str[j]), i);
     }

     maxSubstringSize = Math.max(maxSubstringSize, j - i + 1);
     map.set(str[j], j + 1);
   }

   return maxSubstringSize;
 }

 console.log(findLongestSubstring('abcabcbb'))
