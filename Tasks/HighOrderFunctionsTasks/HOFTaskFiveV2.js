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

import _ from 'lodash';

const takeOldest = (users, count = 1) => {
  const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
  return sorted.slice(0, count);
};

export default takeOldest;
