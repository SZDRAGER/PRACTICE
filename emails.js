import _ from 'lodash';

//Implement and export by default a function that takes a list of 
//emails as input and returns the number of emails used on each 
//free domain. The list of free domains is stored in the freeEmailDomains constant. 

const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];
const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const getFileInfo = (list) => {
  const domains = []
  for (const item of list) {
    const parts = item.split('@');
    const domain = _.last(parts);
    domains.push(domain);
  }
  return domains;
};

const listOfDomains = getFileInfo(emails);


const filteredList = listOfDomains.filter((domain) => { 
  if(freeEmailDomains.includes(domain)) {
    return true;
  }
});



console.log(filteredList)

const getCountedListOfDomains = (listOfDomains) => {
  const result = {};
  for (const domain of listOfDomains) {
    // Проверка на существование
    if (_.has(result, domain)) {
      result[domain] += 1;
    } else {
      result[domain] = 1;
    }
  }

  return result;
};
const listOfCountedDomains = getCountedListOfDomains(filteredList);

console.log(listOfCountedDomains)
