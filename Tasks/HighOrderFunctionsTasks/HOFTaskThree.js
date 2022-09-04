/*
Implement a function that converts dates to an array of human-readable English strings. 
Each of the dates is represented by the array [2001, 10, 18], where the first element is the year, the second is the month, and the third is the number. 
The input function must take any number of parameters. 
If nothing was passed to the function, it should return an empty array. Export the default function.

convert();
// []
 
convert([1993, 3, 24]);
// ['Sat Apr 24 1993']
 
convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]);
// ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']
*/

export default (...coll) => {
  const formattedDates = [];

  for (const item of coll) {
    const date = new Date(...item);
    const formattedDate = date.toDateString();
    formattedDates.push(formattedDate);
  }

  return formattedDates;
};