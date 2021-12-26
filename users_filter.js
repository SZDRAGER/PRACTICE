 
const users = [
    {
      name: 'Tirion',
      friends: [
        { name: 'Mira', gender: 'female' },
        { name: 'Ramsey', gender: 'male' },
      ],
    },
    { name: 'Bronn', friends: [] },
    {
      name: 'Sam',
      friends: [
        { name: 'Aria', gender: 'female' },
        { name: 'Keit', gender: 'female' },
      ],
    },
    {
      name: 'Rob',
      friends: [
        { name: 'Taywin', gender: 'male' },
      ],
    },
];

const getGirlfriends = (users) => {
    const friends = users.map(({ friends }) => friends);
    const flatFriends = [].concat(...friends);
    const girlfriends = flatFriends.filter( friend => friend.gender === 'female')
    console.log(girlfriends);
};

getGirlfriends(users)