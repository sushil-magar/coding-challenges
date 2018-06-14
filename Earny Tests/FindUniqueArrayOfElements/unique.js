'use strict';

module.exports = function findUniqueElements(input) {
  if(!input) return false;

  if(input.length === 1) return input;
  
  let findUnique = (arr) => [...new Set(arr)];
  return findUnique(input);
}