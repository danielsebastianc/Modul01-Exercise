// Soal date day 1
let date1 = new Date();
let date2 = new Date(date1.getFullYear(), 12, 31);
let difference = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
console.log(
    `The difference between today and ${date2.toLocaleString()} is ${difference} days`
);

//Soal 1 convert celcius to farenheit
let celcius = 32;
let faren = celcius * (9 / 5) + 32;
console.log(`celsius: ${celcius} C
farenheit: ${faren} F`);

// Soal 2 check whether number is odd or even
let num = 10;
if (num % 2 == 1) {
    console.log(`The number ${num} is Odd`);
} else {
    console.log(`The number ${num} is Even`);
}

// Soal 3 check wheter number is prime or not
let prime = 7;
for (var i = 0; i <= prime; i++) {
    if (prime % i == 0) {
        console.log(`The number ${prime} is not a prime number`);
        break;
    } else {
        console.log(`The number ${prime} is a prime number`);
        break;
    }
}

// Soal 4 find sum numbers from 1 to N
let angka = 5;
let hasil = 0;
for (var i = 1; i <= angka; i++) {
    hasil += i;
}
console.log(`The sum of numbers 1 to ${angka} is : ${hasil}`);

// Soal 5 find factorial of a number
let number = 5;
let result = 1;
for (var i = 1; i <= number; i++) {
    result *= i;
}
console.log(`Factorial of ${number} is: ${result}`);

//Soal 6 print the frist N fibonacci
// fib 5 = 0 1 1 2 3
let numb = 5;
let r = 0;

for (i = 1; i <= numb; i++) {
    r = numb - i + (numb - i - 1);
    console.log(r);
}
