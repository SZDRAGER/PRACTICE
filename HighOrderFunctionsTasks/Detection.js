const data = [
  { title: 'Book of Fooos', author: 'FooBar', car: '1' },
  { author: 'back', car: 'niva', title: 'Book of Fooos'},
  { author: 'Book of Fooos', car: 'niva'},
  { author: 'back', car: 'niva', title: '1'},
  { author: 'Book of Fooos', car: 'niva'},
];

const where = { author: 'Book of Fooos', car: 'niva' };



const findWhere = (data, where) => {
  const entries = Object.entries(where);
  for (const item of data) {
    let flag = true;
    for (const [key, value] of entries) {
      if (item[key] !== value) {
        flag = false;
      }
    }
    if (flag) {
      return item;
    }
  }

  return null;
};

console.log(findWhere(data, where));


