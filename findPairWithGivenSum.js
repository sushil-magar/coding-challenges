
function findPairs(arr, target) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }

  for (let i = 0; i < arr.length; i++) {
    const nextItem = target - arr[i];

    if (map.has(nextItem)) {
      result.push(i, map.get(nextItem));
      return result;
    }
  }

  console.log('Result is:::', result);

  return result;
}

let arr = [0,2,9,7,11,]; // [1, 4, 45, 6, 10, -8]

console.log(findPairs(arr, 9));