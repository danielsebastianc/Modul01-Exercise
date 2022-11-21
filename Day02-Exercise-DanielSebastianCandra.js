//Soal 1 convert celcius to farenheit
const convertTemperature = (celcius) => {
   let faren = celcius * (9 / 5) + 32;
   return `${faren} F`;
};

// Soal 2 check whether number is odd or even
const oddOrEven = (num) => {
   return num % 2 == 0 ? `Even` : `Odd`;
};

// Soal 3 check wheter number is prime or not
const isPrime = (num) => {
   for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
   return num > 1;
};

// Soal 4 find sum numbers from 1 to N
const findSum = (angka) => {
   let hasil = 0;
   for (var i = 1; i <= angka; i++) {
      hasil += i;
   }
   return hasil;
};

// Soal 5 find factorial of a number
const factorial = (number) => {
   let result = 1;
   for (var i = 1; i <= number; i++) {
      result *= i;
   }
   return result;
};

//Soal 6 print the frist N fibonacci
// fib 5 = 0 1 1 2 3

const fib = (n) => {
   if (n < 2) {
      return 1;
   } else {
      return fib(n - 2) + fib(n - 1);
   }
};

module.exports = { convertTemperature, oddOrEven, isPrime, findSum, factorial, fib };
