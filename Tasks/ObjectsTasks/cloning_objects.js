import _ from 'lodash';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 
        { innerKey: { anotherKey: 'anotherValue' },
    },
  },
  key3: 'value3',},
};

// JSON.parse(JSON.stringify(data));
const copy = (data) => {
  const result = {}; // create a new object
  const entries = Object.entries(data); // an array of keys and values of current object
  for (const [key, value] of entries) { // a loop to go through all key and values
    result[key] = _.isObject(value) ? copy(value) : value;
    // dig deeper if value is an object or copy a primitive value
  }
  return result;
};

export default copy;

console.log(JSON.stringify(data, null, '  '));

