/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result;
  const positive = Boolean(x > 0);
  
  const number = JSON.stringify(Math.abs(x)).split('').reverse().join('');
  
  console.log('Number is:::', number)
  
  if (number > Math.pow(2, 31) || number < (Math.pow(2, 31) * -1)) {
    console.log('Returning 0', number > Math.pow(2, 31), number < (Math.pow(2, 31) * -1));
      return 0;
  } else {
    console.log('Returning from success');
    result = positive ? Number(number) : Number(number - (2 * number));
  }
  
  return result;
};

console.log(reverse(123));