//filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

// filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

// filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);
// []
const word = 'abba';
const words = ['aabb', 'abcd', 'bbaa', 'dada'];

const anagrams = (word, words) => {
    const length = word.length;
    const sample = word
        .split('')
        .sort()
        .join('');
    return words.filter((e) => e.length === length).filter((e) => {
        return e.split('').sort().join('') === sample;
    })
}



const filterAnagrams = (word, words) => {
    const length = word.length;
    const sample = word
        .split('')
        .sort()
        .join('');
    return words.filter((e) => e.length === length).filter((e) => {
        return e.split('').sort().join('') === sample;
    })
}

// export default filterAnagrams;

let a = filterAnagrams(word, words);
console.log(a)