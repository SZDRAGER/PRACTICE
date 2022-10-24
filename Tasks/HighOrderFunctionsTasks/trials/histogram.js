/* 

Implement and export by default a function that displays a horizontal histogram. 
The function takes as input the number of dice rolls and a function that simulates a roll of a dice (it does not need to be implemented). 
Calling this function generates a value between 1 and 6, which corresponds to one of the faces of the die.

The histogram contains rows, each of which corresponds to a face of a dice and the number of occurrences of this face. 
The results are displayed graphically (using # characters) and as a numeric value, except when the count is 0 (zero).

import play from '../histogram.js';

play(100, rollDie);
// => 1|####################### 23
//    2|################## 18
//    3|############# 13
//    4|#################### 20
//    5|############ 12
//    6|############## 14

play(13, rollDie);
// => 1|
//    2|## 2
//    3|# 1
//    4|## 2
//    5|#### 4
//    6|#### 4
*/

import _ from 'lodash';

/* var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
};

const rollDice = () => dice.roll() */

const play = (roundsCount, rollDie) => {
    const bar = '#';
    const numbers = _.times(roundsCount, rollDie);
    const sides = _.range(1, 7);
  
    const lines = sides.map((side) => {
      const count = numbers.filter((number) => number === side).length;
      const displayCount = count !== 0 ? ` ${count}` : '';
      return `${side}|${bar.repeat(count)}${displayCount}`;
    });
    const str = lines.join('\n');
  
    console.log(str);
};

export default play;
