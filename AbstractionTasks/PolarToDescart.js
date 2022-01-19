/* Implement dot interface functions:

  getX(point)
  getY(point)

makePoint(x, y). Takes coordinates as input and returns a point. */

const makePoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt(x ** 2 + y ** 2),
  };

  return point;
};

const getX = (point) => {
  const { radius, angle } = point;
  return Math.round(radius * Math.cos(angle));
};

const getY = (point) => {
  const { radius, angle } = point;
  return Math.round(radius * Math.sin(angle));
};

export default makePoint;
export { getX, getY };


