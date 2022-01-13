const arr = [
    ['*', '*', '*', '*'],
    ['*', ' ', ' ', '*'],
    ['*', ' ', ' ', '*'],
    ['*', '*', '*', '*']
];

const arr2 = [['x', 'b']]
const enlargeArrayImage = (arr) => {
    const duplicateValues = (array) => array
        .flatMap((item) => [item, item]);

    const items = duplicateValues(arr);
    const horizontallyStretched = items.map(duplicateValues);
    return horizontallyStretched;
};

console.log(enlargeArrayImage(arr))





/*
['x'].map((e) => [[e, e], [e, e]]);
['x'].flatMap((e) => [e, e]);
['x'].flatMap((e) => [[e, e], [e, e]]);
*/