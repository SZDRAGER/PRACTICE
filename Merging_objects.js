import _ from 'lodash';

const obj1 = { 
  name: 'Alex', 
  age: '27',
};

const obj2 = {
  name: 'DOremon', 
  age: '32',
  status: 'single',
};

let keys = ['age', 'status'];

const fill = (a, keys, obj2) => {
  const obj1Copy = a;
  const obj3 = _.pick(obj2, keys);
  const result = Object.assign(obj1Copy, obj3);
  return result;
};
console.log(obj1);
console.log(fill(obj1, keys, obj2));
console.log(obj1);
/*
const prepareData = (keys, obj2) => {
  const obj3 = _.pick(obj2, keys);
  return obj3;
};
*/


// let pickedData = _.pick(user, ['age']);
// let userUpdated = Object.assign(user, newData);
