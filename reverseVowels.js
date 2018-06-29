function exchange(input) {
  let str = new String(input);
  let start = 0;
  let end = str.length - 1;

  const list = ['a', 'e', 'i', 'o', 'u'];

  while (start < end) {
    if (list.includes(str[start]) && list.includes(str[end])) {
      console.log(`1. Start: ${start}, and end: ${end}`);
      let temp = str[start];
      str[start] = str[end];
      str[end] = temp;
      console.log(`2. Start: ${start}, and end: ${end} and str: ${str}`);
      start++;
      end--;
    } else if (str[start] && list.includes(str[start]) && !list.includes(str[end])) {
      end--;
    } else if (str[end] && list.includes(str[end]) && !list.includes(str[start])) {
      start++;
    } else {
      start++;
      end--;
    }
  }
  
  return str;
}

let inputStr = 'a nice world';
console.log(exchange(inputStr));