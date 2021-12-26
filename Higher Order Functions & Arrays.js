const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Retail", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 13]

// forEach
/*
for(i = 0; i < companies.length; i += 1) {
    console.log(companies[i])
};
*/

/*
companies.forEach((company) => {
    console.log(company.name); 
});
*/

//Filter
// get 21 and older

/*
let canDrink = [];
for(const item of ages) {
    if(item >= 21) {
        canDrink.push(item)
    }
};
*/
/*
const canDrink = ages.filter((age) => {
    if(age >= 21) {
        return true;
    }
});
*/
/*
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink)
*/
//Fiter retail companies

const retailCompanies = companies.filter((company, start) => company.category === 'Retail' && company.start > 1990);

console.log(retailCompanies);


// Create array of company names
/*
const testMap = companies.map(company => { return `${company.name} [${company.start} - ${company.end}];`});
console.log(testMap)
*/

const agesDoubled = ages
    .map(age => age * 2)
    .map(age => age * 5);

console.log(agesDoubled);


// sort
// sort Companies
/*
const sortedCompanies = companies.sort(function(c1, c2) {
    if(c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});
*/
/*
const sortedCompanies = companies.sort((a, b) => (a.start > b.start) ? 1 : -1);

console.log(sortedCompanies)
*/
// Sort ages
/*
const sortedAges = ages.sort((a, b) => a < b);
console.log(sortedAges);
*/

//reduce
/*
let ageSum = 0;
for (const item of ages) {
    ageSum += item;
};
*/

/*
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);
*/
// Get total years of all companies
/*
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);
*/

// Combined Methods

// Take all ages greater than 20, double each of them and sort frm greatest to lowest
/*
const combined = ages 
    .map(age => age * 2)
    .filter(age => age > 20)
    .sort((a, b) => a - b);

console.log(combined);
*/
/*
const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

const sortedUsers = users.sort((a, b) => Date.parse(a.birthday) > Date.parse(b.birthday) ? 1 : -1);
console.log(sortedUsers)
const needed = sortedUsers.slice()
console.log(needed)
*/
/*
users.forEach((user) => console.log(user));


const takeOldest = users.sort((a, b) => {
    Date.parse(a.birthday) < Date.parse(b.birthday)
});
console.log(takeOldest)
*/