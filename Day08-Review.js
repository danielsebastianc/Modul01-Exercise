const data = [
   { name: "Avanza", brand: "Toyota", machine: "DOHC", cc: 1500 },
   { name: "Supra", brand: "Toyota", machine: "V8", cc: 5000 },
   { name: "ERTIGA", brand: "Suzuki", machine: "DOHC", cc: 1550 },
];

const printData = (arr, cbfn = () => true) => {
   let result = "";
   arr.forEach((obj, index) => {
      const { name, brand, machine, cc } = obj;
      const formatCC = cc.toLocaleString("id");
      if (cbfn(obj)) {
         result += `${index + 1}. ${brand} ${name} with ${machine} ${formatCC}\n`;
      }
   });
   return result;
};

function filterName(obj) {
   return obj.name == "Supra";
}

console.log(printData(data));
