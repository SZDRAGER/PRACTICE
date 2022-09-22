/*
Implement and export by default a function that takes an array as input and returns
a new one consisting of elements that have the same parity as the first element of the input array.

sameParity([-1, 0, 1, -3, 10, -2]); // [-1, 1, -3]
sameParity([2, 0, 1, -3, 10, -2]); // [2, 0, 10, -2]
sameParity([]); // []
*/

const isEven = (num) => num % 2 === 0;

const checkSameParity = (arr) => {
  const firstItemStatus = isEven(arr[0]);
  return arr.filter((el) => isEven(el) === firstItemStatus);
};

export default checkSameParity;



