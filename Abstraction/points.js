/* Implement dot interface functions:

  getX(point)
  getY(point)

makePoint(x, y). Takes coordinates as input and returns a point. */

const calculateDistance = (point1, point2) => {
  const [x1, y1] = point1;
  const [x2, y2] = point2;

  const firstSegment = (y1 - y2);
  const secondSegment = (x1 - x2);

  const distance = Math.sqrt((firstSegment ** 2) + (secondSegment ** 2));
  return distance;
};

export default calculateDistance;

