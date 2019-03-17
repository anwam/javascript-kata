export const median = ({ numberArray }) => {
  numberArray.sort((a, b) => a - b);
  const length = numberArray.length;
  const middleIndex = Math.floor(length / 2);
  return (numberArray[middleIndex] + numberArray[length - 1 - middleIndex]) / 2;
};
