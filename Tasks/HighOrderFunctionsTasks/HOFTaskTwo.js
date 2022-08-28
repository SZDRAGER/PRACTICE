/*
 Implement and export by default a function that returns the arithmetic mean of all arguments passed.
If no arguments are passed to the function, then it should return null.

Examples
average(0); // 0
average(0, 10); // 5
average(-3, 4, 2, 10); // 3.25
average(); // null
*/

import _ from 'lodash';

const average = (...args) => {
  const numberOfArgs = args.length;

  if (numberOfArgs === 0) {
    return null;
  }

  const sumOfArgs = _.sum(args);
  const result = sumOfArgs/numberOfArgs;
  return result;
};

export default average;