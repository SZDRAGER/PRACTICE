import _ from 'lodash';

const rgbToHex = (...rgb) => {
    const result = rgb
        .map((e) => e.toString(16).padStart(2, "0"))
        .join('')
    return `#${result}`;
}
const hexToRgb = (str) => {
    const [r, g, b] = _.chunk(str.slice(1), 2)
        .map((e) => e.join(''))
        .map((e) => parseInt(e, 16));
    return {r, g, b};
}

console.log(rgbToHex(36, 171, 0));

const item2 = '#24ab00'

console.log(hexToRgb(item2));
