/*
Reduce

Implement and export by default a function that takes a list of emails as input and returns the number of emails located on each free domain.
The list of free domains is stored in the freeEmailDomains constant.

This version is shorter then first version. It uses only reduce method.
*/

import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const getFreeDomainsCount = (emails) => emails
  .reduce((acc, email) => {
      const [, domain] = email.split('@');
      if (freeEmailDomains.includes(domain)) {
        const count = get(acc, domain, 0) + 1;
        return { ...acc, [domain]: count}; // do count;
      }
      return { ...acc};
}, {});
  
export default getFreeDomainsCount;