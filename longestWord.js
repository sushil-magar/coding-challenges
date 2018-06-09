// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed 
// and return the largest word in the string. If there are two or more words that are the same length,
// return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

/*
Sample Test Cases
Input:"fun&!! time"

Output:"time"


Input:"I love dogs"

Output:"love"
*/

function LongestWord(word) {
  // Filter out characters and numbers
  const cleanedString = word.replace(/[^a-zA-Z]/g, ' ').replace('  ', '');
  console.log(cleanedString);
  const splitArr = cleanedString.split(' ');

  let currentMax = splitArr[0];

  splitArr.forEach((element) => {
    if (element.length > currentMax.length) {
      currentMax = element;
    }
  });

// code goes here  
return currentMax; 
       
}
 
// keep this function call here 
console.log(LongestWord('I a8e Sushi.'));                         















                          
                          
                          
