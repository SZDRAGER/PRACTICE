const signal1 = "_|¯|____|¯|__|¯¯¯";
// nrzi(signal1); '011000110100'

const nrzi = (signal) => signal
    .split('')
    .map((e, i, array) => {
        if(e === '|') return '';
        return array[i - 1] === '|' ? 1 : 0;
    })
    .join('');

console.log(nrzi(signal1))