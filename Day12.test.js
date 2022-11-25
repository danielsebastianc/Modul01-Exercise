// import fungsi2nya dari file
// debugging dilakukan pada saat manual testing

let { add, multiply } = require("./Day12.js");

// Format codenya:
//
// test("title_testing", () => {
//    write testing code
//    pake expect
//    expect(fungsi_testing).keywordMatching();
// });

// keywordMatching(): ada 2 jenis
// .toBe(value) -> untuk melakukan pengetesan apakah output yang
//                  diberikan sesuai dengan yang diharapkan
// .toBe() biasanya lebih cocok untuk tipe data primitif (string,number,boolean)
//
// untuk ngetest fungsi yang outputnya array atau object
// pake .toEqual(value) -> mengecek apakah outputnya sesuai dengan yang diharapkan

// untuk melakukan testing melalui terminal
// jest --config=config.json namaFile.test.js

test(`Test add function`, () => {
   expect(add(10, 5)).toBe(15);
});

//test buat output salah
test(`Test add function wrong`, () => {
   expect(add(10, 5)).toBe(20);
});

test(`Test multiple function`, () => {
   expect(multiply(10, 5)).toBe(50);
});
