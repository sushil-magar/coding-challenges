
/**
 * @function findFirstDuplicate
 * @param {Object} - input
 */
function findFirstDuplicate(input) {
  const map = new Map();

  for(let i = 0; i < input.length; i++) {
    if (map.has(input[i])) {
      return i;
    }

    map.set(input[i], i);
  }
}

var numbers = [5, 6, 3, 4, 8, 0, 5, 1, 2, 3];

console.log(findFirstDuplicate(numbers));

