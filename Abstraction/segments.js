/* 
segments.js

Implement and export the following functions:

    makeDecartPoint()

     makeSegment(). Takes two points as input and returns a segment.
        makeSegment(beginPoint, endPoint)

     getMidpointOfSegment(). Takes a segment as input and returns a point located in the middle of the segment.
     getBeginPoint(). Takes a segment as input and returns the segment's start point.
     getEndPoint(). Takes a segment as input and returns the end point of the segment. 
*/

const makeDecartPoint = (x, y) => ({ x, y });
const getX = (point) => point.x;
const getY = (point) => point.y;

const makeSegment = (beginPoint, endPoint) => ({ beginPoint, endPoint });

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

const getMidpointOfSegment = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);

  const x = (getX(beginPoint) + getX(endPoint)) / 2;
  const y = (getY(beginPoint) + getY(endPoint)) / 2;

  return makeDecartPoint(x, y);
};

export { makeSegment, getBeginPoint, getEndPoint, getMidpointOfSegment };
