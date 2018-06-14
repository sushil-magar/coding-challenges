'use strict';

module.exports = function findUniqueElements(input) {
  if(!input) return false;
  
  let findUnique = (arr) => [...new Set(arr)];
  return findUnique(input);
}