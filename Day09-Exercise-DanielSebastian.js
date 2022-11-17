// PSEUDOCODE : rancangan penulisan program berdasarkan algoritma yang dibuat
// Title : Function Penjumlahan 2 angka
//

// INPUT:
// 1. Need two parameters with a NUMBER data type, numbA and numbB

// PROCESS :
// 1. Use value from parameters to add(+)
// 2. return result of add process from numbA and numbB

// OUTPUT :
// the result is a NUMBER data type

/////////////////////////////////////////////////////////////////////////////////////////////

// Title : Fungsi untuk mengecek angka ganjil dan genap

// INPUT :
// 1. membutuhkan satu parameter dengan data type NUMBER

// PROCESS :
// 1. Gunakan value dari parameter untuk di tes
// 2. Siapkan variable untuk menyimpan hasil tes
// 3. Tes value parameter untuk mengetahui apakah value tersebut habis dibagi 2
// 5. Hasil tes menjadi genap IF value habis dibagi 2
// 6. ELSE hashil tes menjadi ganjil jika tidak habis dibagi 2
// 7. Simpan hasil tes ke dalam variable

// OUTPUT :
// 1. Hasil merupakan STRING yang berisi kata ganjil atau genap

const oddEven = (num) => {
   let result = "";
   if (num % 2 == 0) {
      result = "Genap";
   } else {
      result = "Ganjil";
   }
   return result;
};

////////////////////////////////////////////////////////////////////////////////////////////////

// Title : fungsi untuk membalikan sebuah string berisi kata

// INPUT :
// 1. membutuhkan satu parameter dengan data type STRING

// PROCESS :
// 1. simpan value parameter dalam sebuah variable bernama result
// 2. split result menjadi array
// 3. reverse result array
// 4. join result array

// OUTPUT :
// 1. Hasil merupakan sebuah STRING dari variable result

const reverseString = (string) => {
   let result = "";
   for (var i = string.length - 1; i >= 0; i--) {
      result += string[i];
   }
   return result;
};

// MENDUPLIKASI FUNCTION ARRAY MAP, FILTER, FIND INDEX OF + PSEUDO CODE
// clue: parameternya ada 2: array dan call back function

// Title: fungsi yang cara kerjanya seperti fungsi array.Map()
const duplicateMap =
   // INPUT:
   // 1. membutuhkan dua parameter untuk array dan call back function
   (arr, cbfn) =>
      // PROCESS:
      {
         // 1. Menyiapkan variable dengan data type ARRAY sebagai hasil
         const arrayHasil = [];

         // 2. Meng-Iterasi setiap data yang ada pada parameter ARR
         for (var i = 0; i < arr.length; i++) {
            // 3. Pada setiap iterasi, jalankan call back function pada data array dan simpan hasil dalam sebuah variable
            const hasilFn = cbfn(arr[i], i, arr);

            // 4. Memasukkan hasil ke dalam array baru
            arrayHasil.push(hasilFn);
         }

         //OUTPUT:
         // 1. Hasil merupakan sebuah ARRAY baru dari variable arrayHasil
         return arrayHasil;
      };

// Title: fungsi yang cara kerjanya seperti fungsi array.Filter()
const duplicateFilter =
   // INPUT:
   // 1. membutuhkan dua parameter untuk array dan call back function
   (arr, cbfn) =>
      // PROCESS:
      {
         // 1. Menyiapkan variable dengan data type ARRAY sebagai hasil
         const arrayHasil = [];

         // 2. Meng-Iterasi setiap data yang ada pada parameter ARR
         for (var i = 0; i < arr.length; i++) {
            // 3. Jalankan call back function pada data array dan simpan hasil dalam sebuah variable
            const hasilFn = cbfn(arr[i], i, arr);

            // 4. Melakukan pengecekan terhadap hasil call back function
            // 5. IF hasilFn adalah True, data akan dimasukkan ke dalam array variable arrayHasil
            if (hasilFn) {
               arrayHasil.push(arr[i]);
            }
         }

         // OUTPUT :
         // 1. Hasil merupakan sebuah ARRAY baru dari variable arrayHasil
         return arrayHasil;
      };

// Title: fungsi yang cara kerjanya seperti fungsi array.findIndex()
const duplicateFindIndex =
   // INPUT:
   // 1. Membutuhkan vdua parameter untuk array dan call back function
   (arr, cbfn) =>
      // PROCESS:
      {
         // 1. Menyiapkan variable dengna data type NUMBER sebagai hasil dengan value awal -1
         let hasilIndex = -1;

         // 2. Meng-Iterasi setiap data yang ada pada parameter ARR
         for (var i = 0; i < arr.length; i++) {
            // 3. Jalankan call back function pada data array dan simpan hasil dalam sebuah variable
            const hasilFn = cbfn(arr[i], i, arr);

            // 4. Melakukan pengecekan terhadap hasil call back function
            // 5. IF variable hasilFn adalah True, index data akan menjadi hasil dan iterasi diberehentikan
            // 6. Value variable hasilIndex tidak akan berubah jika hasilFn bernilai False
            if (hasilFn) {
               hasilIndex = i;
               break;
            }
         }

         // OUTPUT :
         // 1. Hasil merupakan angka index dari data array yang memenuhi kriteria
         return hasilIndex;
      };

const arr = ["kucing", "buaya", "kuda"];
const num = [20, 63, 133, 48];

// console.log(
//    duplicateMap(arr, (val, idx) => {
//       return `${idx + 1}. ${val}`;
//    })
// );

console.log(
   duplicateFilter(num, (val) => {
      return val % 2 == 0;
      // return val % 2 == 0 ? `Genap` : `Ganjil`;
   })
);
