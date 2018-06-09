function isPrime(input) {
  let divider = 2;

  while(input > divider) {
    if (input % divider === 0) {
      return false;
    }

    divider++;
  }

  return true;
}

const number = 137;

isPrime(number);