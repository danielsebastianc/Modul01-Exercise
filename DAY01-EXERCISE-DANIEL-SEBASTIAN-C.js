//Soal 1 Find Area of a Rectangle
let panjang = 5;
let lebar = 5;
let areaOfRectangle = panjang * lebar;
console.log(`panjang: ${panjang}
lebar: ${lebar}
luas: ${areaOfRectangle}`);

//Soal 2 Find Perimeter of a Rectangle
let perimeterOfRectangle = 2 * (panjang + lebar);
console.log(`panjang: ${panjang}
lebar: ${lebar}
keliling: ${perimeterOfRectangle}`);

//Soal 3 Find Area, Circumference, and Diameter of a Circle
let r = 12;
let areaOfCircle = Math.PI * (r * r);
let circumferenceOfCircle = 2 * (Math.PI * r);
let diameterOfCircle = 2 * r;
console.log(`luas: ${areaOfCircle}`);
console.log(`keliling: ${circumferenceOfCircle}`);
console.log(`diameter: ${diameterOfCircle}`);

//Soal 4 Find angles of a Triangle given two angles
let angleA = 72;
let angleB = 48;
let angleC = 180 - angleA - angleB;
console.log(`angle 1: ${angleA}
angle 2: ${angleB}
so angle 3: ${angleC}`);

//Soal 6 convert total number of days to years, months, and days
let numberOfDays = 400;
let years = Math.floor(numberOfDays / 365);
let months = Math.floor((numberOfDays % 365) / 30);
let days = Math.floor((numberOfDays % 365) % 30);
console.log(
    `${numberOfDays} days = ${years} year, ${months} months, ${days} days`
);
