/*
Implement and export by default a function that takes a list of emails as input and returns the number of emails located on each free domain.
The list of free domains is stored in the freeEmailDomains constant.
*/

import get from 'lodash/get.js';

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
    return { ...acc, [domain]: count };
  }, {});

export default getFreeDomainsCount;