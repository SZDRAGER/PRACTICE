import _ from 'lodash';

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];
// OPTION 1

const key = 'mark'
const fun = (acc, person, key) => {
  if (!acc[person[key]]) {
    acc[person[key]] = [];
  }
  acc[person[key]].push(person);
  return acc;
};

const groupBy = students.reduce((acc, person) => fun(acc, person, key), {});

console.log(groupBy)


// OPTION 2
/*
const groupBy = (objects, key) => objects.reduce((acc, object) => {
  // из каждого объекта берётся значение по ключу
  const groupName = object[key];
  // контейнером группы выступает массив
  const group = acc[groupName] ?? []; // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
  // возвращается новый объект аккумулятора
  return { ...acc, [groupName]: group.concat(object) }; // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
  // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
}, {});

console.log(groupBy(students, 'mark'));
*/