function solution(N) {
  let results = [];
  let str = '';
  
  const binary = (N).toString(2);
  
  for (let i = 1; i < binary.length; i++) {
      if (binary[i] === '0') {
          str = str + binary[i];
          console.log('str:::', str);
      } else {
          results.push(str);
          str = '';
      }
  }
  
  return results;
}

console.log(solution(1041));