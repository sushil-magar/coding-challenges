// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.



/**
 * @function findWord
 * @param {String} word 
 * @return {Boolean} - true if word exists in the array
 */
function findWord(board, word) {
  let tempArr = [];

  if (!board || !board.length || !word) {
    return `Either board or word cannot be empty`;
  }

  if (board.length > 1) {
    for(let i = 0; i < board.length; i++) {
      const item = board[i];
      tempArr = tempArr.concat(item);
    }

    // [ 'A', 'B', 'C', 'E', 'S', 'F', 'C', 'S', 'A', 'D', 'E', 'E' ]
    // ABCCED
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      for(let j = 0; j < tempArr.length; j++) {
        if (j === tempArr.length) {
          return 'Could not find the character';
        }

        if (char === tempArr[j]) {
          tempArr.splice(tempArr.indexOf(tempArr[j]));
          break;
        }
      }
    }

    console.log(tempArr)
    return tempArr;
  }


}

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
const word = 'ABCCED';
console.log(findWord(board, word));