function removeDup(input) {
  const nonDup = [];
  
  for (let i = 0; i < input.length; i++) {
    if (!nonDup.includes(input[i])) {
      nonDup.push(input[i]);
    }
  }

  return nonDup;
}


const arr = [1,2,3,3,3,3,4,5,6,7,8,8];
console.log(removeDup(arr));