const input = [4,1,5,2,7,5,1,2];

function findTheNumber(arr) {
  let obj = {};
  let duplicates = {};
  
  for (i = 0; i <= arr.length; i++) {
    if (obj[arr[i]]) {
      duplicates[arr[i]] = i;
    } else {
      obj[arr[i]] = arr[i];
    }
  }

  let finalValue;

  for(var item in duplicates) {
    finalValue = finalValue < duplicates[item] ? duplicates[item] : item;
  }

  return finalValue;
}

const duplicateNumbers = findTheNumber(input);
console.log(duplicateNumbers);
