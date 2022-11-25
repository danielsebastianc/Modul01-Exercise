// pake file buat nyimpan class
// file buat execute class

// bikin waktu random 1-10 detik pake set timeout

// pake while dan promise
// while berguna untuk melakukan print tampilan data

// bikin fungsi enqueue buat masukin data ke array tapi FIFO
// bikin looping setiap data di array tapi FIFO dan buatin new promise
// setiap looping masukin math random ke set timeout
// jadi setiap data array = new Promise((resolve,reject)=>{setTimeout()=>{push ke array buat nampilin data}})
// setiap promise yang dibuat simpan di variable terus di push ke array
// arraynya dipake buat promise.all
// terus .then masukin callback function yg isinya buat nampilin data pake while(?)
//
// kalau mau pake async / await juga bisa
// ada looping didalem try biar semua data array enqueue bisa di await promisenya
// selesai looping baru jalanin function buat nampilin data

class QueueFood {
   constructor() {
      this.orders = [];
   }
   enQueue(order) {
      this.orders.push(order);
   }

   execute() {
      for (let i = 0; i < this.orders.length; i++) {
         const promise = new Promise((resolve, reject) => {
            const timeout = Math.floor(Math.random() * 9000 + 1000);
            setTimeout(() => {
               resolve(`QUEUE-${i + 1} ${this.orders[i]} DONE✅ process => ${timeout}`);
            }, timeout);
         }).then((result) => {
            console.log(result);
         });
      }
   }
}

module.exports = QueueFood;
