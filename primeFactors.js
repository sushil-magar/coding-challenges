function primeNumbers(input) {
  let divider = 2;
  const primeFactors = [];

  while (input > 2) {
    if (input % divider === 0) {
      primeFactors.push(divider);
      input = input / divider;
    } else {
      divider++;
    }
  }

  return primeFactors;
}

const number = 46; // 5 3 3 
console.log(primeNumbers(number));