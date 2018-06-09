function decide(input) {
  const openedBrace = ['(','[','{'];
  const closeBrace = [')',']','}'];
  const map = {')' : '(' , ']': '[', '}':'{'};
  
  const arrSplit = input.split('');
  const tempArr = [];
  
  arrSplit.forEach((entry) => {
    if (closeBrace.includes(entry)) {
      const last = tempArr[tempArr.length - 1];

      if (!last) {
      	console.log('Its undefined');
      }

      if(tempArr[map[entry]]) {
        tempArr.pop(map[entry]);
      }
    }
    
    
    if (openedBrace.includes(entry)) {
      tempArr.push(entry);
    }
  });
}

console.log(decide('}'));