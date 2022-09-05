/*
Implement an internal takeLast() function that returns the last n characters of a string in reverse order.
The number of characters is passed to takeLast() as the second parameter. 
If an empty string or a string less than the required length is passed, the function should return null.

run('');       // null
run('cb');     // null
run('power');  // rewo
run('hexlet'); // telx
*/

const takeLast = (str, length) => {
  if(str.length === 0 || str.length < length) {
    return null;
  }

  const result = [];
  for(let i = str.length - 1; result.length < length; i -= 1) {
    result.push(str[i]);
  }

  return result.join('');
};  

export default takeLast;
