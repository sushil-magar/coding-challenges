let arr = [1,2,3];


// For each simply ignore the return statements in the function passed in forEach()
//1. ignores multiplications statemnt below
const newArr1 = arr.forEach((item) => item * 2)
console.log('arr:::', arr);
console.log('newArr1:::', newArr1);

//2. iterates and logs multiplied number
arr.forEach((item) => console.log(item * 2));
console.log('ForEach demo:::', arr);


// Map - should return new array
const newArr2 = arr.map((item) => item * 2);
console.log('Map demo: ', newArr2);


