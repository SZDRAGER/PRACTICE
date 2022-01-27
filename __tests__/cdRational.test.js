import {
  make,
  getNumer,
  getDenom,
  add,
  toString,
  isEqual,
  sub,
  mul,
  div,
} from "../CompositeDataTasks/cdRational.js";

const rat1 = make(2, 3);
const rat12 = make(1, 4);
const rat2 = make(3, 2);
const rat11 = make(2, 3);

test("selectors", () => {
  expect(getNumer(rat1)).toBe(2);
  expect(getDenom(rat1)).toBe(3);

  expect(getNumer(rat12)).toBe(1);
  expect(getDenom(rat12)).toBe(4);

  expect(getNumer(rat2)).toBe(3);
  expect(getDenom(rat2)).toBe(2);
});

test("toString", () => {
  expect(toString(rat12)).toBe("1 / 4");
});

test("isEqual", () => {
  expect(isEqual(rat1, rat12)).toBe(false);
  expect(isEqual(rat1, rat11)).toBe(true);
  expect(isEqual(rat1, rat2)).toBe(false);
});

test("add", () => {
  expect(toString(add(rat1, rat2))).toBe(toString(make(13, 6)));

  expect(toString(add(rat1, rat12))).toBe(toString(make(11, 12)));
});

test("sub", () => {
  expect(toString(sub(rat2, rat1))).toBe(toString(make(5, 6)));

  expect(toString(sub(rat1, rat2))).toBe(toString(make(-5, 6)));
});

test("mul", () => {
  expect(toString(mul(rat2, rat12))).toBe(toString(make(3, 8)));

  expect(toString(mul(rat1, rat11))).toBe(toString(make(4, 9)));
});

test("div", () => {
  expect(toString(div(rat1, rat2))).toBe(toString(make(4, 9)));

  expect(toString(div(rat12, rat11))).toBe(toString(make(3, 8)));
});
