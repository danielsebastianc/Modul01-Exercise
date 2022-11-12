// Soal 1 check if two objects are equal
let objA = { a: 1, b: 2, c: 3 };
let objB = { a: 1, b: 1, c: 3 };

const isEqual = (obj1, obj2) => {
   let obj1Key = Object.keys(obj1);
   let obj2Key = Object.keys(obj2);
   let hasil = "";

   let obj1Val = obj1Key.map((key) => {
      return obj1[key];
   });
   let obj2Val = obj2Key.map((key) => {
      return obj2[key];
   });

   if (obj1Key.length != obj2Key.length) {
      hasil = `The two objects are not equal`;
      return hasil;
   } else {
      for (var i = 0; i < obj1Key.length; i++) {
         if (obj2Key.includes(obj1Key[i]) == true) {
            hasil = true;
         } else {
            hasil = false;
            break;
         }
      }
      if (hasil == false) {
         return (hasil = `The two objects are not equal`);
      } else {
         for (var i = 0; i < obj1Val.length; i++) {
            if (obj2Val.includes(obj1Val[i]) == true) {
               hasil = true;
            } else {
               hasil = false;
               break;
            }
         }
      }
      if (hasil == false) {
         return (hasil = `The two objects are not equal`);
      }
   }
   return (hasil = `The two objects are equal`);
};

const isEqual2 = (obj1, obj2) => {
   let obj1Key = Object.keys(obj1);
   let obj2Key = Object.keys(obj2);
   let salah = `The two objects are not equal`;

   if (obj1Key.length != obj2Key.length) {
      return salah;
   } else {
      for (var key in obj1Key) {
         if (obj1Key[key] != obj2Key[key]) {
            return salah;
         }
      }
      for (var key in obj1) {
         if (obj1[key] != obj2[key]) {
            return salah;
         }
      }
   }
   return `The two objects are equal`;
};

console.log(isEqual(objA, objB));
console.log(isEqual2(objA, objB));

// Soal 2
// intersect 2 objects

let obj1 = { a: 1, b: 2, d: "John" };
let obj2 = { a: 1, b: 1, c: 3, d: "John" };

let intersect = (obj1, obj2) => {
   let keys = Object.keys(obj1);

   //keys dari obj1 akan di filter, hasil true masuk kedalam array
   let sameKey = keys.filter((property) => {
      //filter keys obj1, jika propertynya ada di obj2 return true
      return property in obj2;
   });

   //menyiapkan object kosong sebagai hasil
   let hasil = {};
   //looping array yang sudah difilter
   sameKey.forEach((property) => {
      //setiap property obj1 diceck valuenya dengan property obj2
      if (Object.is(obj1[property], obj2[property])) {
         //kalau true masukkan ke dalam object hasil
         hasil[property] = obj1[property];
      }
   });
   return hasil;
};

console.log(intersect(obj1, obj2));

// Soal 3
let array1 = [
   { name: "Student 1", email: "student1@mail.com" },
   { name: "Student 2", email: "student2@mail.com" },
];
let array2 = [
   { name: "Student 1", email: "student1@mail.com" },
   { name: "Student 3", email: "student3@mail.com" },
];

let merge = (arr1, arr2) => {
   // bikin set yang isinya nama student sebagai acuan
   let studentName = new Set(
      arr1.map((data) => {
         return data.name;
      })
   );

   let merged = [
      ...arr1,
      ...arr2.filter((student) => {
         return !studentName.has(student.name);
      }),
   ];

   return merged;
};

console.log(merge(array1, array2));

// Soal 4 switch all values into property and property into value
// input: array of objects
let testArr = [
   { name: "Student 1", email: "student1@mail.com" },
   { name: "Student 2", email: "student2@mail.com" },
];

const switchVal = (arr) => {
   let result = arr.map((obj) => {
      for (let key in obj) {
         let temp = key;
         key = obj[key];
         obj[key] = temp;
         delete obj[temp];
      }
      return obj;
   });
   return result;
};

console.log(switchVal(testArr));

// Soal 5
// factorial recursion function

let factorial = (num) => {
   if (num === 0) {
      return 1;
   } else {
      return num * factorial(num - 1);
   }
};

console.log(factorial(5));
