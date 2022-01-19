import makePoint from "../AbstractionTasks/PolarToDescart";
import { getX, getY } from "../AbstractionTasks/PolarToDescart";
/*
getQuadrant() is a function that calculates the quadrant the point is in.

const point = makePoint(1, 5);
getQuadrant(point); // 1
getQuadrant(makePoint(3, -3)); // 4

getSymmetricalPoint() is a function that returns a new point that is symmetrical to the origin.
This symmetry means that the signs of x and y are changed.

getSymmetricalPoint(makePoint(1, 5)); // makePoint(-1, -5)

calculateDistance() - a function that calculates the distance
between points according to the formula: d = sqrt((x2−x1)^2+(y2−y1)^2)
*/

const calculateDistance = (point1, point2) => {
  const deltaX = getX(point2) - getX(point1);
  const deltaY = getY(point2) - getY(point1);
  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
};

const getSymmetricalPoint = (point) => makePoint(-getX(point), -getY(point));

const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);
  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }
  return null;
};

export { calculateDistance, getSymmetricalPoint, getQuadrant };
