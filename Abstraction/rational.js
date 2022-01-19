/* Implement an abstraction for working with rational numbers that includes the following functions:

    The makeRational() constructor takes a numerator and a denominator as input and returns a fraction.
    selector getNumer() - returns the numerator
    selector getDenom() - returns the denominator
    Addition add() - Adds the given fractions
    Subtraction sub() - finds the difference between two fractions
*/

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));
const getNumer = (ratNum) => ratNum.numer;
const getDenom = (ratNum) => ratNum.demon;
const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;


const makeRational = (numer, demon) => {
  const gcd = getGcd(numer, demon);
  return { numer: numer / gcd, demon: demon / gcd };
};

const add = (rat1, rat2) => (
  makeRational(
    getNumer(rat1) * getDenom(rat2) + getNumer(rat2) * getDenom(rat1),
    getDenom(rat1) * getDenom(rat2),
));

const sub = (rat1, rat2) => (
  makeRational(
    (getNumer(rat1) * getDenom(rat2)) - (getNumer(rat2) * getDenom(rat1)),
    getDenom(rat1) * getDenom(rat2),
));



const rational2 = makeRational(32, 64)
const rational1 = makeRational(2, 8)
const rational3 = sub(rational1, rational2);

console.log(rational1)
console.log(rational2)

console.log(rational3)