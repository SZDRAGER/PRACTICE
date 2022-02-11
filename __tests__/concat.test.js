import concat from '../CompositeDataTasks/concat.js';

test('compose', () => {
  expect(concat('')('')('')).toBe('');
  expect(concat('a')('bc')('f')).toBe('abcf');
});