function solution(A) {
  let result = 0;
  let countOne = 0;
  
  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 1) {
      countOne++;
    } else {
      result += countOne;
    }
  }

  return result;
}

console.log(solution([0, 1, 0, 1, 1, 1]));