function zigzag(a) {
  const arraySize = a.length;
  const tempArr = [];
  
  for(let i = 0; i < arraySize; i++) {
      if(a[i] > a[i+1] || a[i] < a[i + 1]) {
          tempArr.push(a[i]);
      } else {
          tempArr.push(a[i]);
      }
  }
  
  return tempArr;
}


const input = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6];

console.log(zigzag(input));