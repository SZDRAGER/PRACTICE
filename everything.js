const users = [
    { name: 'Igor', age: 19 },
    { name: 'Danil', age: 1 },
    { name: 'Vovan', age: 4 },
    { name: 'Matvey', age: 16 },
  ];
  
  // Функция принимает на вход сравниваемые элементы массива
  /*
  const compare = (a, b) => {
    if (a.age === b.age) {
      return 0;
    }
  
    return a.age > b.age ? 1 : -1;
  };
  
  users.sort(compare);
  */

  users.sort((a, b) => { return a.age < b.age });

  console.log(users);