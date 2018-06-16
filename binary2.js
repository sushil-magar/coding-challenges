function solution(N) {
  let currentLongestString = 0;
  let result = '';
  const num = (N).toString(2);

  for (let i = 1; i < num.length; i++) {
      if (num[i] === '0') {
          currentLongestString++;
      } else if (num[i] === '1') {
        if (result.length > currentLongestString) {
          currentLongestString = result.length; 
        }

        result = '';
      }
  }

  return currentLongestString;
}


console.log(solution(19));