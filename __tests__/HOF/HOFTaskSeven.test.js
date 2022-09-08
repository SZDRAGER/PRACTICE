import { describe, it, expect } from '@jest/globals';
import getGirlFriends from '../../Tasks/HighOrderFunctionsTasks/HOFTaskSeven.js';

describe('getGirlFriends', () => {
  it('should be empty', () => {
    expect(getGirlFriends([])).toEqual([]);
  });

  it('should return girl friends', () => {
    const users = [
      {
        name: 'Tirion',
        friends: [
          { name: 'Mira', gender: 'female' },
          { name: 'Ramsey', gender: 'male' },
        ],
      },
      { name: 'Bronn', friends: [] },
      {
        name: 'Sam',
        friends: [
          { name: 'Aria', gender: 'female' },
          { name: 'Keit', gender: 'female' },
        ],
      },
      {
        name: 'Rob',
        friends: [
          { name: 'Taywin', gender: 'male' },
        ],
      },
    ];

    const expected = [
      { name: 'Mira', gender: 'female' },
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ];

    expect(getGirlFriends(users)).toEqual(expected);
  });
});
