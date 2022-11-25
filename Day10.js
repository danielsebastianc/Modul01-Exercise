const convertExcel = (string) => {
   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const huruf = alphabet.split("");
   const strSplit = string.split("");

   let fLetter = Math.pow(huruf.length, string.length - 1) * (huruf.indexOf(strSplit[0]) + 1);
   let SLetter = huruf.indexOf(strSplit[1]) + 1;

   return fLetter + SLetter;
};

// console.log(convertExcel("DC"));

const num = [1, 3, 1, 2, 3, 5];

const findSingle = (arr) => {
   let result = [];
   for (i = 0; i < arr.length; i++) {
      let filterResult = [];
      if (arr.indexOf(arr[i]) == i) {
         filterResult = arr.filter((val) => {
            return arr[i] == val;
         });
      }
      if (filterResult.length == 1) {
         result.push(arr[i]);
      }
   }
   return result.join(", ");
};

//console.log(findSingle(num));

const isAnagram = (word1, word2) => {
   if (word1.length != word2.length) {
      return false;
   }
   const sortWord1 = word1.toLowerCase().split("").sort();
   const sortWord2 = word2.toLowerCase().split("").sort();

   for (i = 0; i < word1.length; i++) {
      if (sortWord1[i] != sortWord2[i]) {
         return false;
      }
   }
   return true;
};

const s = "rat";
const t = "tar";

// console.log(isAnagram(s, t));

const stair = (n) => {
   if (n < 3) {
      return n;
   }
   return stair(n - 2) + stair(n - 1);
};

console.log(stair(8));
