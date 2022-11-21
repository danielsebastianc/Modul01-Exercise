//Soal 1 Find Area of a Rectangle
const findArea = (lebar, panjang) => {
   let areaOfRectangle = panjang * lebar;
   return areaOfRectangle;
};

//Soal 2 Find Perimeter of a Rectangle
const findPerimeter = (panjang, lebar) => {
   let perimeterOfRectangle = 2 * (panjang + lebar);
   return perimeterOfRectangle;
};

//Soal 3 Find Area, Circumference, and Diameter of a Circle
const areaCircle = (r) => {
   let areaOfCircle = Math.PI * (r * r);
   return Math.round(areaOfCircle);
};
const circumferenceCircle = (r) => {
   let circumferenceOfCircle = 2 * (Math.PI * r);
   return Math.round(circumferenceOfCircle);
};
const diameterCircle = (r) => {
   let diameterOfCircle = 2 * r;
   return diameterOfCircle;
};

//Soal 4 Find angles of a Triangle given two angles
const triangle = (angleA, angleB) => {
   let angleC = 180 - angleA - angleB;
   return angleC;
};

//Soal 6 convert total number of days to years, months, and days
const convertDays = (days) => {
   let years = Math.floor(days / 365);
   let months = Math.floor((days % 365) / 30);
   let hari = Math.floor((days % 365) % 30);
   return `${days} days = ${years} year, ${months} months, ${hari} days`;
};

const dateDiff = (date1, date2) => {
   let dateFirst = new Date(date1);
   let dateSecond = new Date(date2);
   let difference = Math.abs(Math.round(dateFirst - dateSecond) / (1000 * 60 * 60 * 24));
   return `Difference is ${difference} days`;
};

module.exports = {
   findArea,
   findPerimeter,
   areaCircle,
   circumferenceCircle,
   diameterCircle,
   triangle,
   convertDays,
   dateDiff,
};
