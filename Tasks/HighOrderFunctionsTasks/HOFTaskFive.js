/* 
Sorting

Implement a takeOldest() function that takes a list of users as input and returns the oldest.
The number of returned users is set by the second parameter, which is equal to one by default.
Export this function by default.

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];
 
takeOldest(users);
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];
*/

//Without lodash

const takeOldest = (users, number = 1) => {
  const sortedUsers = users.sort((a, b) => (Date.parse(a.birthday) > Date.parse(b.birthday)) ? 1 : -1);
  return sortedUsers.slice(0, number);
};

export default takeOldest;
