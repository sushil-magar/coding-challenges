// Merge two sorted arrays
// mergeSortedArray([2,5,6,9], [1,2,3,29]); ===> 1, 2, 2, 3, 5, 6, 9, 29]


function mergeArrays(firstArr, secondArr) {
  const arr = [...firstArr, ...secondArr];

  //[ 2, 5, 6, 1, 9, 2, 3, 29 ]

  for(let i = 0; i < arr.length; i++) {
    let current = i;
    let next = i + 1;

    if (arr[current] > arr[next]) {
      console.log(current)
      console.log(next)

      let temp = arr[current];
      arr[current] = arr[next];
      arr[next] = temp;
    }
  };

  return arr;
}


console.log(mergeArrays([2,5,6,9], [1,2,3,29]));
