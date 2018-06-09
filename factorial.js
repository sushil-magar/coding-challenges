
function findFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  let fact;

  if (number !== 0) {
    fact = number * findFactorial(number - 1);
  }

  return fact;
}

const number = 5;
console.log(findFactorial(number));


