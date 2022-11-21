//import

let {
   findArea,
   findPerimeter,
   areaCircle,
   circumferenceCircle,
   diameterCircle,
   triangle,
   convertDays,
   dateDiff,
} = require("./DAY01-EXERCISE-DANIEL-SEBASTIAN-C.js");

test(`Test Find Area of Rectangle Function`, () => {
   expect(findArea(10, 5)).toBe(50);
});

test(`Test Find Perimeter of Rectangle Function`, () => {
   expect(findPerimeter(10, 5)).toBe(30);
});

test(`Test Find Area of Circle Function`, () => {
   expect(areaCircle(12)).toBe(452);
});

test(`Test Find Circumference of Circle Function`, () => {
   expect(circumferenceCircle(12)).toBe(75);
});

test(`Test Find Diameter of Circle Function`, () => {
   expect(diameterCircle(12)).toBe(24);
});

test(`Test Find 3rd Angle of Triangle Function`, () => {
   expect(triangle(54, 37)).toBe(89);
});

test(`Test Convert Days Function`, () => {
   expect(convertDays(400)).toBe(`400 days = 1 year, 1 months, 5 days`);
});

test(`Test Find Difference Between Dates Function`, () => {
   expect(dateDiff("11/12/2022", "12/12/2022")).toBe(`Difference is 30 days`);
});
