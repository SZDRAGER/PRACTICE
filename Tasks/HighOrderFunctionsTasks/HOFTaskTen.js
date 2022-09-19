/* 
Recursion

Add (using a recursive process) a sequenceSum() function that finds the sum of a sequence of integers. The sequence is given by two values: begin - the beginning of the sequence, end - the end of the sequence. For example: begin = 2 and end = 6 give us such a sequence 2, 3, 4, 5, 6. The sum of such a sequence will be: 20.

import sequenceSum from './sequenceSum';
 
sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
*/

const sequenceSum = (begin, end) => {
    if (begin > end) {
        return NaN;
    }
    if (begin === end) {
        return begin;
    }

return begin + sequenceSum(begin + 1, end);
};

export default sequenceSum;