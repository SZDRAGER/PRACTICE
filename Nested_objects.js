const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};
// const hasBarProperty = Object.prototype.hasOwnProperty.call(current, key);
let keys = ['hosts', 1, 'name'];

const getValue = (obj, keys) => {
  let current = obj;
  console.log(current === data);
  console.log(`Current object:`)
  for (let key of keys) {
    console.log(key)
    console.log(`Current object:`)
    console.log(current[key])
    current = current[key];
      if(current === undefined) {
          return null;
      }
  }
  return current;
};

console.log(getValue(data, keys))