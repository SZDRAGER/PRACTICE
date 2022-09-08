/* 
Implement and export by default a function that takes a list of users as input and returns a flat list of all users' girlfriends (without storing keys).
Each user's friends are stored as an array in the friends key. 
Gender is accessed by the key gender and can take the values male or female.

const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
]

getGirlFriends(users);
// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' },
// ];
*/

const getGirlfriends = (users) => {
  const friendsOfUsers = users.map(({ friends }) => friends);
  return friendsOfUsers.flat().filter(({ gender }) => gender === 'female');
};

export default getGirlfriends;