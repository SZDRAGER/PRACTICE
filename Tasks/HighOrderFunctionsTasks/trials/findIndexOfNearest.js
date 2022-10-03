/* 
Implement and export by default a function that accepts an array of numbers and the desired number as input.
The task of the function is to find the closest number to the desired one in the array and return its index in the array.

If the array contains several numbers that are simultaneously the closest to the searched number,
then the smallest of the indices of the nearest numbers is returned. 

findIndexOfNearest([], 2);              // null
findIndexOfNearest([15, 10, 3, 4], 0);  // 2
findIndexOfNearest([7, 5, 3, 2], 4);    // 1
findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2
*/

const findIndexOfNearest = (numbers, goal) => {
    if (numbers.length === 0) {
        return null;
    }
    const diffs = numbers.map((element) => Math.abs(element - goal));
    const nearestIndex = diffs.reduce((index, diff, currentIndex) => (
        diff < diffs[index] ? currentIndex : index), 0);
    return nearestIndex;
};

export default findIndexOfNearest;





