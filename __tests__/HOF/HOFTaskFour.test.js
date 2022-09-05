import takeLast from '../../Tasks/HighOrderFunctionsTasks/HOFTaskFour.js';

test('strings test', () => {
  expect(takeLast('', 4)).toBeNull();
  expect(takeLast('cb', 5)).toBeNull();
  expect(takeLast('power', 2)).toBe('re');
  expect(takeLast('kids', 4)).toBe('sdik');
  expect(takeLast('hexlet', 3)).toBe('tel');
});
