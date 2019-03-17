export const splitTeam = ({ sailors }) => {
  if (Object.keys(sailors).length < 1 || Object.keys(sailors).length > 100) {
    throw new Error('sailors must be between 1 to 100');
  }

  const result1 = [];
  const result2 = [];

  Object.keys(sailors).forEach(sailor => {
    if (sailors[sailor] > 40 || sailors[sailor] < 20) {
      result1.push(sailor);
    } else {
      result2.push(sailor);
    }
  });
  return [[...result1.sort()], [...result2.sort()]];
};
