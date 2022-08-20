const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};

const bind = (obj, fn) => {
  const newFn = (...args) => {
    fn()
    fn.apply(args)}; 
  return newFn;
};

const fnWithContext = bind(obj, fn);
// Принимает столько же аргументов сколько и исходная функция
fnWithContext(3); // 8

// export default bind;