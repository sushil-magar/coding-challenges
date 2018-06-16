function newNumeralSystem(number) {
  result = [];
  
  for (let i = 0; i < number - 2; i++) {
      const numberToFind = number - i;
      result.push((number - i).toString() + '+' + i.toString());
  }
  
  return result;
}

console.log(newNumeralSystem(8));
