const array = [3, 1, 2, 4]



const isEven = (number) => { return number % 2 === 0 ? true : false};
const firstItemStatus = isEven(array[0]);
const checkSameParity = (array) => array.filter((item) => firstItemStatus === isEven(item));

// if number - item > currenClosest  then add to index

const goal = 5;
const a = (array) => array
    .reduce((prev, curr) => {
        const [prevItem , prevIndex] = prev;
        const prevIndex = array.
        return (Math.abs(curr - goal) < Math.abs(prevItem - goal) ? curr : [prevItem, prevIndex]);
    })

console.log(a(array))




