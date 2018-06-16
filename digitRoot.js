function digitRootSort(a) {
  const sum = (num) => [...num.toString()].reduce((a, b) => +a + +b);
  
  const digitRoot = a.sort((a, b) => {
    console.log('a:',a , 'b', b);

    return (sum(a) - sum(b) || a - b);
  });

  return digitRoot;
}

const arr = [13,20,7,4];

console.log(digitRootSort(arr));
