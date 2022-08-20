const cons = (x, y) => (f) => f(x, y);

const car = (f) => f((x) => x);
const cdr = (f) => f((x, y) => y);

export { cons, car, cdr };
