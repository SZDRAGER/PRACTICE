const str = '10';

const count = (str) => {
    if(str.length === 1) {
        return str;
    }
    let result = 0;
    for (let i = 0; i < str.length; i += 1) {
        result += Number(str[i]);
    }

    let strResult = String(result);
    if(strResult.length >= 1) {
        return count(strResult);
    }
};

console.log(count(str));