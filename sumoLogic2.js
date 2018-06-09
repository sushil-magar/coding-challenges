// input
const list = ['Adam', 'Brett', 'Cari', 'Donna', 'Ethan', 'Fred', 'Grok', 'Han', 'Izzy', 'Jay'];
const columns = 3;  // or 4, etc
// output
// [
//  [ 'Adam', 'Ethan', 'Izzy'],
//  [ 'Brett', 'Fred', 'Jay'], 
//  [ 'Cari', 'Grok'],
//  [ 'Donna', 'Han']
// ]
// function tableify (list, columns) {
//   const numberOfRows = Math.ceil(list.length / columns);

//   let result = [];

//   let row = 0;
//   let column = 0;

//   for(let i = 0; i < list.length; i++) {
//     if (!result[row]) {
//       result[row] = [];
//     }

//     result[row].push(list[i]);
//     row++;

//     if(row === numberOfRows) {
//       row = 0;
//       column++;
//     }
//   }

//   return result;
// }


// Andrew

function tableify(arr, size = 3) {
  const rows = Math.ceil(arr.length / size);
  const chunks = Array.from(Array(rows)).map(() => []);

  arr.forEach((val, idx) => {
    chunks[idx%rows].push(val);
  });

  return chunks;
}

console.log(JSON.stringify( tableify(list, columns)) );

