/* Main interface:

MakeRectangle(point, width, height)  - Creates a rectangle. It accepts parameters: 
left-top point, width and height. Width and height are positive numbers.
Width and height are positive numbers;

Selectors: 
getStartPoint(rectangle), getWidth(rectangle), and getHeight(rectangle);

containsOrigin(rectangle) - checks if the center of coordinates 
belongs to the rectangle (does not lie on the border of the rectangle, but is inside).
*/

const makeDecartPoint = (x, y) => ({x ,y});
const makeRectangle = (point, width, height) => ({topLeftPoint: point, width, height});
const getWidth = (rectangle) => rectangle.width;
const getHeight = (rectangle) => rectangle.height;
const getStartPoint = (rectangle) => rectangle.topLeftPoint;
const getX = (point) => point.x;
const getY = (point) => point.y;

const containsOrigin = (rectangle) => {
  if (getX(getStartPoint(rectangle)) >= 0 || getY(getStartPoint(rectangle)) <= 0) {
    return false;
  }
  const bottomRightPointX = getX(getStartPoint(rectangle)) + getWidth(rectangle);
  const bottomRightPointY = getY(getStartPoint(rectangle)) - getHeight(rectangle);

  const result = !!(bottomRightPointX > 0 && bottomRightPointY < 0);
  return result;
};


const p = makeDecartPoint(0, 1);
const rectangle = makeRectangle(p, 4, 5);


console.log(containsOrigin(rectangle))
