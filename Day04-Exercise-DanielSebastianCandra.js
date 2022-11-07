// Soal 1 create triangle pattern, parameter:height -> triangle height
function triangle(height) {
    let triangle = "";
    let counter = 0;
    for (var i = 1; i <= height; i++) {
        for (var x = 1; x <= i; x++) {
            counter++;
            if (counter < 10) {
                triangle += ` 0${counter} `;
            } else {
                triangle += ` ${counter} `;
            }
        }
        triangle += "\n";
    }
    return triangle;
}
console.log(triangle(5));

// Soal 2 fizzBuzz, parameter: n -> total looping
function fizzBuzz(n) {
    let output = "";
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += `FizzBuzz\n`;
        } else if (i % 5 === 0) {
            output += `Buzz\n`;
        } else if (i % 3 === 0) {
            output += `Fizz\n`;
        } else {
            output += `${i}\n`;
        }
    }
    return output;
}
console.log(fizzBuzz(15));

// Soal 3 BMI calculator, parameter: weight, height
function bmi(weight, height) {
    let meterH = height / 100;
    let BMI = weight / Math.pow(meterH, 2);
    if (BMI < 18.5) {
        return `less weight\n`;
    } else if (BMI > 18.5 && BMI <= 24.9) {
        return `ideal\n`;
    } else if (BMI >= 25.0 && BMI <= 29.9) {
        return `overweight`;
    } else if (BMI >= 30.0 && BMI <= 39.9) {
        return `very overweight\n`;
    } else {
        return `obesity\n`;
    }
}
console.log(bmi(75, 175));

// Soal 4 remove all odd numbers
function removeOdd(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            newArray.push(array[i]);
        } else {
            continue;
        }
    }
    return newArray;
}
let contoh = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(removeOdd(contoh));

// Soal 5 Split string and convert into array (tidak boleh pakai split)
function split(string) {
    let newArray = [""];
    let counter = 0;
    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) == " ") {
            counter++;
            newArray.push("");
        } else {
            newArray[counter] = newArray + string.charAt(i);
        }
    }
    return newArray;
}
console.log(split("Hello World"));
