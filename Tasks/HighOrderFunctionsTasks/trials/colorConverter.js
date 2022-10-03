import _ from 'lodash';

/* 
When working with colors, you often need to get the individual values of the red, green,
and blue (RGB) components of a color in decimal notation, and vice versa. 
Implement and export the rgbToHex() and hexToRgb() functions that return the appropriate color representation.

hexToRgb('#24ab00'); // { r: 36, g: 171, b: 0 }

rgbToHex(36, 171, 0); // '#24ab00'
*/

// NEW VERSION

const rgbToHex = (...rgb) => {
    const result = rgb
        .map((e) => e.toString(16).padStart(2, "0"))
        .join('')
    return `#${result}`;
};

const hexToRgb = (str) => {
    const [r, g, b] = _.chunk(str.slice(1), 2)
        .map((e) => e.join(''))
        .map((e) => parseInt(e, 16));
    return {r, g, b};
};

export {rgbToHex , hexToRgb};

/* FIRST VERSION

const rgbToHex = (...rgb) => {
    const result = rgb
      .map((e) => e.toString(16).padStart(2, '0'))
      .join('');
    return `#${result}`;
};
  
const getValues = (str) => {
    const values = _.chunk(str, 2);
    const result = values
      .reduce((acc, item) => [...acc, item.join('')], [])
      .map((e) => parseInt(e, 16));
    return result;
};
  
const hexToRgb = (str) => {
    const copiedInput = JSON.parse(JSON.stringify(str));
    const cleanedNum = copiedInput
      .slice(1);
    const values = getValues(cleanedNum);
    const keys = ['r', 'g', 'b'];
    const result = Object.assign(...keys.map((k, i) => ({ [k]: values[i] })));
    return result;
};

export {rgbToHex , hexToRgb}; */
