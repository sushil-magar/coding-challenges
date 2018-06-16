function solution(N) {
  let currentMax = 0;
  const output = [];
  let result = '';
  const binary = (someNum) => (someNum).toString(2);
  const num = binary(N);

  // console.log(num);

  for(let i = 1; i < num.length; i++) {
      if (num[i] === '0') {
          result =  result + num[i];
      } else if (num[i] === '1') {
          if (result) {
            output.push(result);
          };

          result = '';
      }
  }

  // console.log(output);

  for (let i = 0; i <= output.length - 1; i++) {
      let max = output[i].length;

      // console.log(output)
      
      if (!max) {
          return 0;
      } else if (currentMax < max) {
          currentMax = max;
      }
  }
  
  return currentMax;
}


console.log(solution(19));