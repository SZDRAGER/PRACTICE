import get from 'lodash/get.js';

//Implement and export by default a function that takes a list of 
//emails as input and returns the number of emails used on each 
//free domain. The list of free domains is stored in the freeEmailDomains constant. 

const emails = [
    'info@yandex.ru',
    'mk@host.com',
    'support@hexlet.io',
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
const getFreeDomainsCount = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((domain) => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => { 
    const count = get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count};
  }, {})

console.log(getFreeDomainsCount(emails))