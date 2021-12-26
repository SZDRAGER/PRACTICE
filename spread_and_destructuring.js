const users = [

    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  
];
for (const item in users) {
    const { name } = users[item];
}

const getSortedNames = (users) => {
    const names = [];

  
    for (const { gender, ...rest } of users) {
        names.push(rest)
    }

    return names.sort();
  
  };

console.log(getSortedNames(users));
