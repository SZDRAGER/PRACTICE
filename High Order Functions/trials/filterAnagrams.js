import get from 'lodash/get.js';

//filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

// filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

// filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);
// []



const b = ['strd', 'rts', 'kar'];
const a = 'str'
const length = b.length;


const filterAnagrams = (str, [...words]) => {
    const strSplitted = str
        .split('')
        .sort()
    console.log(strSplitted)
    const length = str.length;
    const filteredWords = words
        .filter((word) => word.length === length)
        .map((e) => e
            .split('')
            .sort())

    return filteredWords;

/*
    for (const item of filteredWords) {
        [...chars] = item;
        
    }
        
        .reduce((acc, key) => {
            const count = get(acc, key, 0) + 1;
            return {...acc, [key]: count};
        }, {})
        */
    
};

console.log(filterAnagrams(a, b))

const c = [ 'r', 's', 't' ]
const d = [ 'r', 's', 't' ]

for (const item of c) {
    if (d.includes(item)) {
        console.log(true)
    } else { console.log(false) }
}
