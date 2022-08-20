let _ = require('lodash');


const users = [
    { name: 'Petr', age: 4 },
    { name: 'Igor', age: 19 },
    { name: 'Vovan', age: 4 },
    { name: 'Matvey', age: 16 },
];

// предварительно подготовим функцию-обработчик
const cb = (acc, user) => {
    console.log(acc)
    if (!_.has(acc, user.age)) {
      acc[user.age] = [];
    }
    acc[user.age].push(user.age);
    return acc; // обязательно вернуть!
};
  
// Начальное значение – пустой объект
const usersByAge = users.reduce(cb, {});

console.log(usersByAge)