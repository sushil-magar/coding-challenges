function findIndexes(arr, sum) {
  if (!arr || !sum) {
      return 'nothing to find.'
  }
  
  for (let i = 0; i < arr.length; i++){
      for(let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === sum) {
              return [i, j];
          }
      }
  }
}

const input = [2,11,7,9];
const sum = 9;

console.log(findIndexes(input, sum));




/**
 * 
 * 
// Input -> numbers[2,11,7,9] and X=9
// Output -> [0,2]


/*
* @function findIndexes
* @param {Object} arr
* @return {Object} outputArr
function findIndexes(arr, sum) {
  if (!arr || !sum) {
      return 'nothing to find.'
  }
  
  for (let i = 0; i < arr.length; i++){
      for(let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === sum) {
              return [i, j];
          }
      }
  }
}

const input = [2,11,7,9];
const sum = 16;

console.log(findIndexes(input, sum));

 */