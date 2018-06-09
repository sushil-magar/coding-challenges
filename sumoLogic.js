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
function tableify (list, columns) {
 // add code here to transform the above list into the output shown above, using 3 as the columns parameter. 
  
  const numberOfRows = Math.ceil(list.length / columns); // 4
  
  let result = [];
  
//  while(){
  //  const start = i;
    //const next = start + (numberOfRows - 1);
 // }
  
  let row = 0;
  let column = 0;
  
  for ( let i = 0; i < list.length; i++) {
    if (!result[row]){
      result[row] = [];
    }
    
    result[row][column] = list[i];
    console.log ("Adding here - ", row, column,list[i]);
    row++;
    
    if (row >= numberOfRows) {
      console.log ("advancing to new column when row = ", row);
      row = 0;
      column++;
    } 
  }
  
 return result;
}

console.log(JSON.stringify( tableify(list, columns)) );

