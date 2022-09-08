/* 
Reduce

Implement and export a default function to group objects by a given property.
The function takes as arguments an array of objects and the name of the property to be grouped.
It should return an object where the key is the value for the given property and the value is an array with data appropriate for the group.

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];
 
groupBy([], ''); // {}
groupBy(students, 'mark');
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }
*/

const groupBy = (objects, key) => objects.reduce((acc, object) => {
  // value is taken from each object by key
  const groupName = object[key];
  // the container of the group is an array
  const group = acc[groupName] ?? []; // The null merge operator returns an empty array if there is nothing in the accumulator
  // a new accumulator object is returned
  return { ...acc, [groupName]: group.concat(object) }; // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
  // the old accumulator is destructured, a new array with data is written for the current group
}, {});

export default groupBy;