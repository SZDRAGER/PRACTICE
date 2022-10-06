/* 
Implement and export the ipToInt()and functions intToIp(),
which convert the representation of an IP address from dotted decimal to 32-bit decimal and back.

The function ipToInt()takes a string as input and should return a number.
And the function is the intToIp()opposite: it takes a number as input, and returns a string.

ipToInt('128.32.10.1'); // 2149583361
ipToInt('0.0.0.0'); // 0
ipToInt('255.255.255.255'); // 4294967295

intToIp(2149583361); // '128.32.10.1'
intToIp(0); // '0.0.0.0'
intToIp(4294967295); // '255.255.255.255'
*/

const ipToInt = (str) => {
    let result = str
        .split('.')
        .reduce((acc, e, i) => (e * Math.pow(256, Math.abs(i - 3)) + acc), 0);
    return result;
};

const intToIp = (int) => {
    var part1 = int & 255;
    var part2 = ((int >> 8) & 255);
    var part3 = ((int >> 16) & 255);
    var part4 = ((int >> 24) & 255);
    
    return part4 + "." + part3 + "." + part2 + "." + part1;
};

export { ipToInt, intToIp};