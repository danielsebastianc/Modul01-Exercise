const {
   loHiAvg,
   noSort,
   concat,
   splitClone,
   calculate,
   checkNum,
   removeOdd,
} = require("./Day05-Exercise-DanielSebastianCandra.js");

test(`Test Low High Average Function`, () => {
   expect(loHiAvg([5, 6, 2, 8, 1, 4, 7, 3])).toBe(
      `Highest number: 8, Lowest number: 1, Average: 4.5`
   );
});

test(`Test Low High Average (without sorting) Function`, () => {
   expect(noSort([5, 6, 2, 8, 1, 4, 7, 3])).toBe(
      `Highest number: 8, Lowest number: 1, Average: 4.5`
   );
});

test(`Test Concat Words Function`, () => {
   expect(concat(["Hello", "World", "I", "am", "Alive"])).toBe(`Hello, World, I, am, and Alive`);
});

test(`Test Add Numbers From Two Array's Function`, () => {
   expect(calculate([1, 2, 3, 4], [3, 2, 1])).toEqual([4, 4, 4, 4]);
});

test(`Test Add Number To End of Array Function`, () => {
   expect(checkNum(3)).toEqual([1, 2, 7, 34, 6, 3]);
});

test(`Test Remove Odd Numbers Function`, () => {
   expect(removeOdd([123, 418, 16, 37, 33, 2])).toEqual([418, 16, 2]);
});
