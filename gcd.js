// Greatest common divisor 
// For numbers 14 and 21, 7 is GCD.

function findGcd(a, b) {
  let divisor = 2;

  if (a < 0 || b < 0) {
    console.log('Negative numbers');
    return;
  }

  while(a >= divisor && b >= divisor) {
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    } else {
      divisor++;
    }
  }
}

const numbers = [24, 16];

console.log(findGcd(numbers[0], numbers[1]));