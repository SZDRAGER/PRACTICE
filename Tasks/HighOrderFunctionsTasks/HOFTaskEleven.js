/* 
Iterative process

Implement the body of the smallestDivisor() function using an iterative process. The function should find the smallest divisor of the given number. The number passed to the function is greater than zero.

Add. condition: the divisor must be greater than one, unless the argument is one (whose smallest divisor is also one).

For example, the smallest divisor of 15 is 3.

smallestDivisor(15); // 3
smallestDivisor(17); // 17
*/

const smallestDivisor = (num) => {
    const iter = (acc) => {
      // We use 'num / 2' in the condition below, and not 'num'.
      // This is a simple optimization: a number cannot be divided
      // by a number larger than its half.
      if (acc > num / 2) {
        return num;
      }
      if (num % acc === 0) {
        return acc;
      }
      return iter(acc + 1);
    };
  
    return iter(2);
  };
  
  export default smallestDivisor;