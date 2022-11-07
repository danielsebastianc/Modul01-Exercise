// Soal 1 lowest, highest, and average (with and without sort)
let numbers = [1, 2, 3, 4, 5, 6, 7, 7, 8];

// with sort
let loHiAvg = (arr) => {
    let totalVal = 0;
    arr.sort((a, b) => {
        return a - b;
    });
    arr.forEach((val) => {
        totalVal += val;
    });
    let avg = totalVal / arr.length;
    let maxVal = arr[arr.length - 1];
    let minVal = arr[0];
    return `Highest number: ${maxVal}, Lowest number: ${minVal}, Average: ${avg}`;
};

console.log(loHiAvg(numbers));

//without sort

let noSort = (arr) => {
    let totalVal = 0;
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    arr.forEach((val) => {
        totalVal += val;
    });
    let avg = totalVal / arr.length;
    return `Highest number: ${maxVal}, Lowest number: ${minVal}, Average: ${avg}`;
};

console.log(noSort(numbers));

// Soal 2 concat word in a array seperated by commas and last word by an "and"
let words = ["Hello", "World", "I", "am", "Alive"];
let concat = (arr) => {
    if (arr.length < 3) {
        return `${arr[0]} and ${arr[1]}`;
    } else {
        let finalString = arr.map((word, idx) => {
            if (idx == arr.length - 1) {
                return "and " + word;
            } else {
                return word + ", ";
            }
        });
        return finalString.join("");
    }
};

console.log(concat(words));

// Soal 3 dibikin dinamis tanpa fungsi split
let splitClone = (string, seperator) => {
    let arrFinal = [""];
    let counter = 0;
    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) == seperator) {
            counter++;
            arrFinal.push("");
        } else {
            arrFinal[counter] += string.charAt(i);
        }
    }
    return arrFinal;
};

console.log(splitClone("Hello World", "o"));

// Soal 4 challenge: kalau isi array beda ditambah 0
let deret1 = [1, 2, 3, 4];
let deret2 = [3, 2, 1];

let add = (num1 = 0, num2 = 0) => {
    return num1 + num2;
};

let calculate = (arr1, arr2) => {
    let arrResult = arr1.map((val, idx) => {
        return add(val, arr2[idx]);
    });
    return arrResult;
};

console.log(calculate(deret1, deret2));

// Soal 5 end element to end of an array (kalau sudah ada jgn di add)
let num = 6;
let checkNum = (num) => {
    let array = [6];
    if (array.includes(num)) {
        return `The number ${num} is already in the array`;
    } else {
        array.push(num);
    }
    return array;
};

// Soal 6 remove all odd numbers in an array and return new array that contains even numbers
let angka = [123, 418, 16, 37, 33, 2, 4, 52, 34, 17];

let removeOdd = (arr) => {
    let finalArr = arr.filter((number) => {
        return number % 2 == 0;
    });
    return finalArr;
};

console.log(removeOdd(angka));
