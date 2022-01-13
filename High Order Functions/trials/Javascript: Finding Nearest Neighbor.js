const array1 = [3, 1, 2, 4, 4]

const goal1 = 3;
const findIndexOfNearest = (numbers, goal) => {
    if (numbers.length === 0) {
        return null;
    }
    const diffs = numbers.map((element) => Math.abs(element - goal));
    console.log(diffs)
    const nearestIndex = diffs.reduce((index, diff, currentIndex) => (
        diff < diffs[index] ? currentIndex : index), 0);
    return nearestIndex;
};




console.log(findIndexOfNearest(array1, goal1))




