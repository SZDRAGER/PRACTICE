/* 
Implement and export a default function that finds all anagrams of a word. 
The function takes a source word and a list to check (an array), and returns an array of all anagrams. 
If there are no anagrams in the list of words, then an empty array is returned.

filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);
// []
*/

export default (word, words) => {
    const normalize = (str) => str.split('').sort().join('');
    const normal = normalize(word);
  
    return words.filter((item) => normalize(item) === normal);
};
