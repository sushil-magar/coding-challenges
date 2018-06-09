function binarySearch(arr, target) {
  const sortedArr = arr.sort((a, b) => a-b); // o (n log n)
  console.log(sortedArr);

  // for(let i =0; i < sortedArr.len);
}

const arr = [23, 56, 1, 88, 190, 210, 678];
const number = 77;

console.log(binarySearch(arr, number));