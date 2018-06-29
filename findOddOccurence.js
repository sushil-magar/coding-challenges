// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let result = {};
    let output;
    
    for (let i = 0; i < A.length; i++) {
        if (!result[A[i]]) {
            result[A[i]] = 1;
        } else {
            result[A[i]]++;
        }
    }
    
    Object.keys(result).forEach((key) => {
        if (result[key] === 1) {
            output = Number(key);
        }
    });
    
    return output;
}