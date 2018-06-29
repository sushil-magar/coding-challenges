/*
function getArr() {
  const arr = [];

  for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      arr.push(i);
    });
  }

  return arr;
}

const arr = getArr();
setTimeout(() => console.log(arr));
console.log(arr);
*/

var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
  console.log(y);
