let {
   convertTemperature,
   oddOrEven,
   isPrime,
   findSum,
   factorial,
   fib,
} = require("./Day02-Exercise-DanielSebastianCandra.js");

test(`Test Convert Temperature Function`, () => {
   expect(convertTemperature(33)).toBe(`91.4 F`);
});

test(`Test Odd or Even Number Function`, () => {
   expect(oddOrEven(33)).toBe(`Odd`);
});

test(`Test Is Prime Number Function`, () => {
   expect(isPrime(5)).toBe(true);
});

test(`Test Find Sum Function`, () => {
   expect(findSum(5)).toBe(15);
});

test(`Test Factorial Function`, () => {
   expect(factorial(5)).toBe(120);
});

test(`Test Fibonacci Function`, () => {
   expect(fib(5)).toBe(8);
});
