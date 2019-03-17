import findNeighbor from './index';

describe('Find neighborhood cell', () => {
  it('should return a number', () => {
    const { neighborsCount } = findNeighbor({
      grid: [],
      targetRow: 0,
      targetColumn: 0,
    });
    expect(neighborsCount).toEqual(1);
  });
});
