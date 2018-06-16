function findHappyNumber(number, visited) {
  if (number === 1) return true;

  const arr = number.toString().split('');
  const value = arr.reduce((a,b) => Math.pow(a, 2) + Math.pow(b, 2));

  if (!visited[value]) {
    visited[value] = true;
  }

  return findHappyNumber(value, visited);
}

console.log(findHappyNumber(3));