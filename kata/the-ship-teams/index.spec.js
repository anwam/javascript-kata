import { splitTeam } from './index';

describe('The Ship Team Kata', () => {
  test('amount of sailors must be between 1 to 100', () => {
    expect(() => {
      splitTeam({ sailors: {} });
    }).toThrow(new Error('sailors must be between 1 to 100'));
  });

  it('should return 2 arrays of 2 sailor teams', () => {
    const result = splitTeam({ sailors: { Arnon: 42, Smith: 39 } });
    expect(result).toEqual([['Arnon'], ['Smith']]);
  });

  it('should return 2 arrays of 2 sailor teams', () => {
    const result = splitTeam({
      sailors: { Arnon: 42, Smith: 39, Colemen: 35, Watson: 50 },
    });
    expect(result).toEqual([['Arnon', 'Watson'], ['Colemen', 'Smith']]);
  });
});
