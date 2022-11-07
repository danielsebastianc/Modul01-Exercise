// Soal 1 display multiplication table of a given integer
// number->9 : 9x1,9x2,9x2...9x10
let number = 9;
let hasil = "";
for (var i = 1; i <= 10; i++) {
    hasil += `${number} x ${i}\n`;
}
console.log(`Number -> ${number}
Output:
${hasil}`);

// Soal 2 check whether a string is a palindrome or not
// palindrome: dibaca dari depan/belakang sama
let word = "RACECAR";
let counter = word.length;
for (i = 0; i < word.length; i++) {
    if (word.charAt(i) == word.charAt(counter - 1)) {
        counter--;
        if (counter == 0) {
            console.log(`The word ${word} is a palindrome`);
        }
    } else {
        console.log(`The word ${word} is not a palindrome`);
        break;
    }
}

// Soal 3 convert cm to km
let centi = 12345678;
let kilo = centi / 100000;
console.log(`${centi} cm is ${kilo} km`);

// Soal 4 format number as currency (IDR)
// Example: 1000 -> "Rp. 1.000,00"
let uang = 5000000;
let format = `Rp. ${uang.toLocaleString("ID")},00`;
console.log(`${uang} -> ${format}`);

// Soal 5 remove the first occurrence of a given "search string"
// Example: string="Hello world", search string = "ell" output: "Ho world"
let string = "Hello world";
let searchString = "ell";
let result = string.split(searchString).join("");
console.log(`Removing "${searchString}" from "${string}"
Result: ${result}`);

// Soal 6 capitalize the frist leter of each word
// Example: "hello world" Output: "Hello World"
let kalimat = "java script";
let wrd = kalimat.split(" ");
for (var i = 0; i < wrd.length; i++) {
    wrd[i] = wrd[i][0].toUpperCase() + wrd[i].slice(1);
}
console.log(`Capitalize the first letter of "${kalimat}" : ${wrd.join(" ")}`);

// Soal 7 Reverse a string
let kata = "Hello World";
let count = kata.length;
let kataBaru = "";
for (i = 0; i <= kata.length; i++) {
    kataBaru += `${kata.charAt(count - 1)}`;
    count--;
}
console.log(`Reverse string of ${kata} is ${kataBaru}`);
