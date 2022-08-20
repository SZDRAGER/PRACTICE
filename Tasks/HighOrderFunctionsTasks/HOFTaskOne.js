/* 
Implement and export by default a function that checks if a given number is prime and prints yes or no.

The purpose of this task is to learn how to separate clean code from code with side effects.

To do this, isolate the process of determining whether a number is prime into a separate function that returns a boolean value.
This is a function by which we separate pure code from code that interprets a boolean value (like 'yes' or 'no') and does a side effect (printing to the screen).

An example of such separation and good abstractions is in the teacher's decision. */

const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  };
  
  const sayPrimeOrNot = (num) => {
    const text = isPrime(num) ? 'yes' : 'no';
    return text;
  };
  
  export default sayPrimeOrNot;