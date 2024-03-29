import sayPrimeOrNot from '../../Tasks/HighOrderFunctionsTasks/HOFTaskOne.js';

describe('should be prime', () => {
  const numbers = [2, 3, 19, 23, 47, 5, 7, 13];

  test.each(numbers)('test with %i', (num) => {
    sayPrimeOrNot(num);
    expect(sayPrimeOrNot(num)).toBe('yes');
  });
});

describe('should not be prime', () => {
  const numbers = [49, 8, 4, 1, 0, -3, 9, 25];

  test.each(numbers)('test with %i', (num) => {
    sayPrimeOrNot(num);
    expect(sayPrimeOrNot(num)).toBe('no');
  });
});