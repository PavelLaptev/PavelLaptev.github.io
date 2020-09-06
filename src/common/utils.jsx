export const getTween = (start, end, index) => {
  const distance = start - end;
  return start - (index / 100) * distance;
};

export const getMoveIndex = (
  mouseEventDirection,
  elPosition,
  elDimension,
  movementSpeed
) => {
  let relativePos = mouseEventDirection - elPosition;
  return (relativePos - elDimension / 2) / movementSpeed;
};
