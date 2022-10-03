/* 
Implement and export by default a function that takes a string as 
a graphical representation of a linear waveform and returns a binary string.

const signal1 = '_|¯|____|¯|__|¯¯¯';
nrzi(signal1); // '011000110100'
 
const signal2 = '|¯|___|¯¯¯¯¯|___|¯|_|¯';
nrzi(signal2); // '110010000100111'
 
const signal3 = '¯|___|¯¯¯¯¯|___|¯|_|¯';
nrzi(signal3); // '010010000100111'
 
const signal4 = '';
nrzi(signal4); // ''
 
const signal5 = '|';
nrzi(signal5); // '' */

const nrzi = (signal) => {
  if (signal[0] === '|' && signal.length === 1) {
    return '';
  }
  // Separate signals and create an array
  const str = signal.split('');
  // change signals to digits
  const b = str.map((element) => (element === '_' || element === '¯' ? 0 : 1));
  const result = [];
  for (let i = 0; i < str.length; i += 1) {
    if (b[i] === 1) {
      result.push(1);
      i += 1;
    } else {
      result.push(0);
    }
  }
  const strResult = result.join('');
  return strResult;
};

export default nrzi;