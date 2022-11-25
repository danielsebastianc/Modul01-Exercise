// TEST DRIVEN DEVELOPMENT
// untuk memeriksa apakah output yang diinginkan sudah sesuai atau belum

// MANUAL TESTING
// - mengecek step by step dari sisi user
// - harus menjalankan program kita di browswer
// - setiap hal yang dites dari perspective diri kita

// AUTOMATED TESTING
// - membuat serangkaian program untuk mengetes program yang kita buat
// - program akan mengetest secara otomatis

// untuk melakukan automated testing pakai jest

// install jest: npm i -g jest
// mac: sudo npm i -g jest

// mengumpulkan program kedalam function agar dapat bisa di import ntr
// siapkan functionnya yang ingin di tes
// functionnya harus ada returnnya

let add = (numA, numB) => {
   return numA + numB;
};

let multiply = (numA, numB) => {
   return numA * numB;
};

// terus siapkan file testingnya
//format:
// 1. namaFile.test.js
// 2. namaFile.spec.js

// dibutuhkan satu file lagi untuk konfigurasi jest supaya bisa testing
// format file: config.json

// export filenya

module.exports = { add, multiply };
