import { cons, car, cdr } from "../CompositeDataTasks/cdPairs.js";

const make = (numer, denom) => cons(numer, denom);

const getNumer = (rat) => car(rat);

const getDenom = (rat) => cdr(rat);

const toString = (rat) => `${getNumer(rat)} / ${getDenom(rat)}`;

const isEqual = (rat1, rat2) => getNumer(rat1) * getDenom(rat2) === getNumer(rat2) * getDenom(rat1);

const add = (rat1, rat2) => {
  const numer =
    getNumer(rat1) * getDenom(rat2) + getDenom(rat1) * getNumer(rat2);
  const denom = getDenom(rat1) * getDenom(rat2);
  return make(numer, denom);
};

const sub = (rat1, rat2) => {
  const numer =
    getNumer(rat1) * getDenom(rat2) - getDenom(rat1) * getNumer(rat2);
  const denom = getDenom(rat1) * getDenom(rat2);
  return make(numer, denom);
};

const mul = (rat1, rat2) => {
  const numer = getNumer(rat1) * getNumer(rat2);
  const denom = getDenom(rat1) * getDenom(rat2);
  return make(numer, denom);
};

const div = (rat1, rat2) => {
  const numer = getNumer(rat1) * getDenom(rat2);
  const denom = getDenom(rat1) * getNumer(rat2);
  return make(numer, denom);
};

export { make, getNumer, getDenom, toString, isEqual, div, add, sub, mul };
